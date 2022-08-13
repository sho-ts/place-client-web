import { AuthService } from '@/services';

const authService = new AuthService();

export const getHeaders = async () => {
  try {
    const { accessToken } = await authService.getCurrentUser();

    return {
      Authentication: accessToken,
    };
  } catch (error) {
    return {
      Authentication: '',
    };
  }
};
