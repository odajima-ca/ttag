import React from "react";
import { Box, Button, Flex } from "rebass/styled-components";

const setupPostMessage = (props: Props) => {
  const { mediaId, placementId } = props;

  const message = {
    ebis: {
      type: "handshake",
      mediaId,
      placementId
    }
  };
  console.log(`[${placementId}]`, "Child send message", "[handshake]", message);
  window.top.postMessage(message, "*");
};

interface Props {
  placementId: string;
  mediaId: string;
}

const App: React.FC<Props> = ({ placementId, mediaId }) => {
  const [status, setStatus] = React.useState("initialized");
  const [adWindow, setAdWindow] = React.useState();
  const [adOrigin, setAdOrigin] = React.useState();

  React.useEffect(() => {
    window.addEventListener("message", (event: MessageEvent) => {
      const ebisData = event.data && event.data.ebis;

      let newAdOrigin;
      let newAdWindow;
      let newStatus;

      if (
        ebisData &&
        ebisData.mediaId === mediaId &&
        ebisData.placementId === placementId
      ) {
        switch (ebisData.type) {
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

        console.log(
          `[${placementId}]`,
          "Child receive message",
          `[${ebisData.type}]`,
          newStatus,
          {
            origin: newAdOrigin || adOrigin,
            status: newStatus || status,
            window: newAdWindow || adWindow
          }
        );

        if (newAdOrigin) setAdOrigin(newAdOrigin);
        if (newAdWindow) setAdWindow(newAdWindow);
        if (newStatus) setStatus(newStatus);
      }
    });

    console.log(`[${placementId}]`, "Child change status", status);
    setupPostMessage({ mediaId, placementId });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = () => {
    const message = {
      ebis: {
        type: "clicked",
        mediaId,
        placementId
      }
    };

    if (adWindow && adOrigin) {
      console.log(
        `[${placementId}]`,
        "Child send message",
        "[clicked]",
        message
      );
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
