import React from "react";
import FrameComponent from "react-frame-component";
import { Box, Button, Flex, Text } from "rebass";

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
    <Flex flexDirection="column" flexWrap="nowrap">
      <Box as="header" bg="lightgray">
        <Button as="a" href="/" fontSize={[3, 4, 5]} color="white" p={3} pl={4}>
          DEMO
        </Button>
        <Flex flexWrap="nowrap">
          {[1, 2, 3, 4].map(num => (
            <Button as="a" href="/" p={3}>
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
        <Box p={5} bg="lightgray" mb={3} />

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
            <FrameComponent
              children={null}
              frameBorder={0}
              initialContent={initialContent}
              scrolling="no"
              style={{ width: 400, height: 360 }}
            />
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
            <FrameComponent
              children={null}
              frameBorder={0}
              initialContent={initialContent}
              scrolling="no"
              style={{ width: 400, height: 360 }}
            />
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
