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
