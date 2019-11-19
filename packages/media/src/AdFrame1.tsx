import React from "react";
import FrameComponent from "react-frame-component";

const AdFrame2: React.FC = () => {
  const initialContent = `
<!DOCTYPE html>
<html>
    <head>
        <style>
            body, #ad-root { 
                margin: 0; 
                padding: 0;
                width: 336px;
                height: 280px; 
            }
        </style>
    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="ad-root"></div>
        <script>
            // アグリゲーションID
            var TRAVENUE_AG_ID = "agID-1234567890";
            // GAのユーザーID
            var TRAVENUE_GA_ID = "gaID-1234567890";
            // リダイレクト先URL
            var TRAVENUE_REDIRECT_URL = "https://クリック.ホテル.jp?lk=";
            // リダイレクト先ログインURL
            var TRAVENUE_REDIRECT_LOGIN_URL = "https://アクセス.ログイン.jp?returnUri=xxxx&redirect_uri=";
            // SEMキーワードID
            var TRAVENUE_SEM_KEYWORD_ID = "semID-1234567890";
            // サイト内検索情報
            var TRAVENUE_SEARCH_TEXT = "沖縄県";
            // コンテンツカテゴリ
            var TRAVENUE_CONTENTS_CATEGORY = "ホテル";
        </script>
        <script src="${process.env.REACT_APP_AD_HOST}/${process.env.REACT_APP_ATAG_FILE}" data-mediaId=${process.env.REACT_APP_MEDIA_ID} data-placementId="placement-1111"></script>
    </body>
</html>
  `;

  return (
    <FrameComponent
      children={null}
      frameBorder={0}
      initialContent={initialContent}
      scrolling="no"
      style={{ width: 400, height: 360 }}
    />
  );
};

export default AdFrame2;
