/// <reference types="react-scripts" />

// Rebass for styled-components
declare module "rebass/styled-components" {
  import * as r from "rebass";
  import { CSSObject } from "styled-components";
  export interface BaseProps {
    sx?: CSSObject;
  }
  export = r;
}

// Process ENV
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";
    readonly PUBLIC_URL: string;

    readonly REACT_APP_AD_HOST: string;

    readonly REACT_APP_RUNTIME_ATAG_FILE: string;
    readonly REACT_APP_ATAG_FILE: string;

    readonly REACT_APP_RUNTIME_PTAG_FILE: string;
    readonly REACT_APP_PTAG_FILE: string;
  }
}
