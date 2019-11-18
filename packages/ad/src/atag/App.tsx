import React from "react";
import { Box, Button, Flex } from "rebass/styled-components";

const setupPostMessage = () => {
  const message = {
    ptag: {
      type: "handshake"
    }
  };
  console.log("Child send message", message.ptag.type, message);
  window.top.postMessage(message, "*");
};

const App: React.FC = () => {
  const [status, setStatus] = React.useState("initialized");
  const [adWindow, setAdWindow] = React.useState();
  const [adOrigin, setAdOrigin] = React.useState();

  React.useEffect(() => {
    window.addEventListener("message", (event: MessageEvent) => {
      const atag = event.data && event.data.atag;

      let newAdOrigin;
      let newAdWindow;
      let newStatus;

      if (atag) {
        switch (atag.type) {
          case "connected":
            newAdOrigin = event.origin;
            newAdWindow = event.source as WindowProxy;
            newStatus = "connected";

            break;

          case "confirm":
            newStatus = "confirm";

            break;

          case "confirmedTheYes":
            newStatus = "confirmedTheYes";

            break;

          case "confirmedTheNo":
            newStatus = "confirmedTheNo";

            break;
        }

        console.log("Child receive message", newStatus, {
          origin: newAdOrigin || adOrigin,
          status: newStatus || status,
          window: newAdWindow || adWindow
        });

        if (newAdOrigin) setAdOrigin(newAdOrigin);
        if (newAdWindow) setAdWindow(newAdWindow);
        if (newStatus) setStatus(newStatus);
      }
    });

    console.log("status", status);
    setupPostMessage();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = () => {
    const message = {
      ptag: {
        type: "clicked"
      }
    };

    if (adWindow && adOrigin) {
      console.log("Child send message", message.ptag.type, message);
      adWindow.postMessage(message, adOrigin);
    }
  };

  return (
    <Box width={400} height={360}>
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
          <p>status: {status}</p>
        </Flex>
        <Box pt={1} height="64px">
          <Button
            variant="primary"
            width="100%"
            height="100%"
            onClick={handleClick}
          >
            ボタン1
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default App;
