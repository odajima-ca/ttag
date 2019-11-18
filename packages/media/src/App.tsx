import React from "react";
import { Box, Button, Flex } from "rebass";

import AdFrame1 from "./AdFrame1";
import AdFrame2 from "./AdFrame2";
import ConfirmModal from "./ConfirmModal";

const App: React.FC = () => {
  return (
    <Flex flexDirection="column" flexWrap="nowrap">
      <Box as="header" bg="lightgray">
        <Button as="a" href="/" fontSize={[3, 4, 5]} color="white" p={3} pl={4}>
          DEMO
        </Button>
        <Flex flexWrap="nowrap">
          {[1, 2, 3, 4].map(num => (
            <Button as="a" href="/" p={3} key={num}>
              MENU {num}
            </Button>
          ))}
        </Flex>
      </Box>

      <Box bg="lightblue" height={[250, 300]} />

      <Box
        as="main"
        width={[1, 9 / 10, 8 / 10, 7 / 10]}
        maxWidth={["100%", 980]}
        mx="auto"
        my={3}
      >
        <Box p={5} bg="lightgray" mb={3}>
          <ConfirmModal />
        </Box>

        <Flex flexWrap="wrap">
          <Box width={[1, 1 / 2]} px={2} py={2}>
            <Box bg="lightgray" width="100%" height={360} />
          </Box>
          <Box width={[1, 1 / 2]} px={2} py={2}>
            <Box bg="lightgray" width="100%" height={360} />
          </Box>
          <Box width={[1, 1 / 2]} px={2} py={2}>
            <Box bg="lightgray" width="100%" height={360} />
          </Box>
          <Box width={[1, 1 / 2]} px={2} py={2} id="ad-frame-container-1">
            <AdFrame1 />
          </Box>
          <Box width={[1, 1 / 2]} px={2} py={2}>
            <Box bg="lightgray" width="100%" height={360} />
          </Box>
          <Box width={[1, 1 / 2]} px={2} py={2}>
            <Box bg="lightgray" width="100%" height={360} />
          </Box>
          <Box width={[1, 1 / 2]} px={2} py={2}>
            <Box bg="lightgray" width="100%" height={360} />
          </Box>
          <Box width={[1, 1 / 2]} px={2} py={2}>
            <Box bg="lightgray" width="100%" height={360} />
          </Box>
          <Box width={[1, 1 / 2]} px={2} py={2} id="ad-frame-container-2">
            <AdFrame2 />
          </Box>
          <Box width={[1, 1 / 2]} px={2} py={2}>
            <Box bg="lightgray" width="100%" height={360} />
          </Box>
          <Box width={[1, 1 / 2]} px={2} py={2}>
            <Box bg="lightgray" width="100%" height={360} />
          </Box>
          <Box width={[1, 1 / 2]} px={2} py={2}>
            <Box bg="lightgray" width="100%" height={360} />
          </Box>
          <Box width={[1, 1 / 2]} px={2} py={2}>
            <Box bg="lightgray" width="100%" height={360} />
          </Box>
          <Box width={[1, 1 / 2]} px={2} py={2}>
            <Box bg="lightgray" width="100%" height={360} />
          </Box>
          <Box width={[1, 1 / 2]} px={2} py={2}>
            <Box bg="lightgray" width="100%" height={360} />
          </Box>
          <Box width={[1, 1 / 2]} px={2} py={2}>
            <Box bg="lightgray" width="100%" height={360} />
          </Box>
        </Flex>
      </Box>

      <Box bg="lightgray" height={[250, 300]} mt={5} />
    </Flex>
  );
};

export default App;
