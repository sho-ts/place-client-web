import AWS from 'aws-sdk';
import {
  CognitoUserPool,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserSession,
  AuthenticationDetails,
  ISignUpResult,
} from 'amazon-cognito-identity-js';
import { createUser } from '@/repositories/user/post';

type LoginResult = {
  idToken: string;
  accessToken: string;
};

type GetCurrentUserResult = {
  user: CognitoUser;
  idToken: string;
  accessToken: string;
};

AWS.config.region = process.env.NEXT_PUBLIC_AWS_REGION;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: process.env.NEXT_PUBLIC_IDENTITY_POOL_ID,
});

class AuthService {
  cognitoUserPoll = new CognitoUserPool({
    UserPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
    ClientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  });

  register(name: string, userId: string, email: string, password: string) {
    const attributes = [
      new CognitoUserAttribute({
        Name: 'email',
        Value: email,
      }),
    ];

    return new Promise<ISignUpResult>((resolve, reject) => {
      // Conitoに認証情報を登録
      this.cognitoUserPoll.signUp(
        email,
        password,
        attributes,
        [],
        (error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error || new Error('resultが返って来ませんでした'));
          }
        }
      );
    }).then((result) => {
      // DBにユーザー情報を登録
      return createUser({
        authId: result.userSub,
        name,
        userId,
      });
    });
  }

  login(email: string, password: string) {
    const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: this.cognitoUserPoll,
    });

    return new Promise<LoginResult>((resolve, reject) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
          resolve({
            accessToken: result.getAccessToken().getJwtToken(),
            idToken: result.getIdToken().getJwtToken(),
          });
        },
        onFailure: (error) => {
          reject(error);
        },
      });
    });
  }

  logout() {
    const user = this.cognitoUserPoll.getCurrentUser();
    user && user.signOut();
  }

  getCurrentUser() {
    const user = this.cognitoUserPoll.getCurrentUser();

    return new Promise<GetCurrentUserResult>((resolve, reject) => {
      if (user) {
        user.getSession(
          (error: Error | null, session: CognitoUserSession | null) => {
            error && reject(error);
            session &&
              resolve({
                user,
                idToken: session.getIdToken().getJwtToken(),
                accessToken: session.getAccessToken().getJwtToken(),
              });
          }
        );
      } else {
        reject(new Error('ユーザー情報が見つかりませんでした'));
      }
    });
  }
}

export default AuthService;
