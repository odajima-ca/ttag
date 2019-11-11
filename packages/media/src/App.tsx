import React from "react";
import FrameComponent from "react-frame-component";
import { Box, Card, Flex } from "rebass";

const App: React.FC = () => {
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
        <script src="${process.env.REACT_APP_AD_HOST}/${process.env.REACT_APP_ATAG_FILE}"></script>
    </body>
</html>
  `;

  return (
    <div className="App">
      <header className="App-header">
        <Flex flexDirection="row" flexWrap="wrap">
          <Box m={1} width="336px" height="280px">
            <Card bg="gray" height="100%" />
          </Box>
          <Box m={1} width="336px" height="280px">
            <Card bg="gray" height="100%" />
          </Box>
          <Box m={1} width="336px" height="280px">
            <Card bg="gray" height="100%" />
          </Box>
          <Box m={1} width="336px" height="280px">
            <Card bg="gray" height="100%" />
          </Box>
          <Box m={1} width="336px" height="280px" id="ad-frame-container">
            <FrameComponent
              children={null}
              frameBorder={0}
              initialContent={initialContent}
              scrolling="no"
              style={{ width: 336, height: 280 }}
            />
          </Box>
          <Box m={1} width="336px" height="280px">
            <Card bg="gray" height="100%" />
          </Box>
          <Box m={1} width="336px" height="280px">
            <Card bg="gray" height="100%" />
          </Box>
          <Box m={1} width="336px" height="280px">
            <Card bg="gray" height="100%" />
          </Box>
          <Box m={1} width="336px" height="280px">
            <Card bg="gray" height="100%" />
          </Box>
        </Flex>
      </header>
    </div>
  );
};

export default App;
