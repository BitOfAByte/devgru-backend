declare global {
  namespace NodeJS {
    interface ProcessEnv {
      port: string;
      AccessToken: string;
    }
  }
}

export {}
