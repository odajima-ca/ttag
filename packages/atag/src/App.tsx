import React from "react";
import { Box, Button, Flex } from "rebass";

const App: React.FC = () => {
  return (
    <Box width="336px" height="280px">
      <Flex flexDirection="column" flexWrap="nowrap" height="100%">
        <Flex
          alignItems="center"
          bg="lightgreen"
          flex="auto"
          flexDirection="column"
          flexWrap="nowrap"
          justifyContent="center"
        >
          <h3>コンテンツ1</h3>
        </Flex>
        <Box p={1} height="64px">
          <Button variant="primary" width="100%" height="100%">
            ボタン1
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default App;
