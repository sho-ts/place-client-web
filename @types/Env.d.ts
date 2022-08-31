declare namespace NodeJS {
  // 環境変数名の定義
  interface ProcessEnv {
    NEXT_PUBLIC_AWS_REGION: string;
    NEXT_PUBLIC_IDENTITY_POOL_ID: string;
    NEXT_PUBLIC_USER_POOL_ID: string;
    NEXT_PUBLIC_CLIENT_ID: string;
    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_S3_BUCKET: string;
    NEXT_PUBLIC_CRYPTO_KEY: string;
  }
}
