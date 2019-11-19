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

declare global {
  interface Window {
    // アグリゲーションID
    TRAVENUE_AG_ID: string;
    // GAのユーザーID
    TRAVENUE_GA_ID: string;
    // リダイレクト先URL
    TRAVENUE_REDIRECT_URL: string;
    // リダイレクト先ログインURL
    TRAVENUE_REDIRECT_LOGIN_URL: string;
    // SEMキーワードID
    TRAVENUE_SEM_KEYWORD_ID: string;
    // サイト内検索情報
    TRAVENUE_SEARCH_TEXT: string;
    // コンテンツカテゴリ
    TRAVENUE_CONTENTS_CATEGORY: string;
  }
}
