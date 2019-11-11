/// <reference types="react-scripts" />

// Process ENV
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";
    readonly PUBLIC_URL: string;

    readonly REACT_APP_ATAG_HOST: string;
  }
}
