import React from "react";
import Iframe from "react-iframe";
import { Box, Card, Flex } from "rebass";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Flex flexDirection="row" flexWrap="wrap">
          <Box p={1} width={[1, 1 / 2, 1 / 3, 1 / 4]} height={256}>
            <Card bg="gray" height="100%" />
          </Box>
          <Box p={1} width={[1, 1 / 2, 1 / 3, 1 / 4]} height={256}>
            <Card bg="gray" height="100%" />
          </Box>
          <Box p={1} width={[1, 1 / 2, 1 / 3, 1 / 4]} height={256}>
            <Card bg="gray" height="100%" />
          </Box>
          <Box p={1} width={[1, 1 / 2, 1 / 3, 1 / 4]} height={256}>
            <Card bg="gray" height="100%" />
          </Box>
          <Box p={1} width={[1, 1/2, 1/3, 1/4]} height={256}>
            <Iframe
              url={process.env.REACT_APP_ATAG_HOST}
              width="100%"
              height="100%"
              id="myId"
              className="myClassname"
              display="inline"
              position="relative"
              frameBorder={0}
              styles={{ boxSizing: "border-box" }}
            />
          </Box>
          <Box p={1} width={[1, 1 / 2, 1 / 3, 1 / 4]} height={256}>
            <Card bg="gray" height="100%" />
          </Box>
          <Box p={1} width={[1, 1 / 2, 1 / 3, 1 / 4]} height={256}>
            <Card bg="gray" height="100%" />
          </Box>
          <Box p={1} width={[1, 1 / 2, 1 / 3, 1 / 4]} height={256}>
            <Card bg="gray" height="100%" />
          </Box>
          <Box p={1} width={[1, 1 / 2, 1 / 3, 1 / 4]} height={256}>
            <Card bg="gray" height="100%" />
          </Box>
        </Flex>
      </header>
    </div>
  );
};

export default App;
