import React from "react";
import Iframe from "react-iframe";
import { Box, Card, Flex } from "rebass";

const App: React.FC = () => {
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
          <Box m={1} width="336px" height="280px">
            <Iframe
              url={process.env.REACT_APP_ATAG_HOST}
              width="336px"
              height="280px"
              id="myId"
              className="myClassname"
              display="inline"
              position="relative"
              frameBorder={0}
              styles={{ boxSizing: "border-box" }}
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
