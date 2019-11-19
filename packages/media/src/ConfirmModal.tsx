import moment from "moment";
import React from "react";
import Modal from "react-modal";
import { Box, Button, Flex, Image } from "rebass/styled-components";
import styled from "styled-components";

export interface PointBackInfo {
  endDate: string;
  logoUrl: string;
  name: string;
  pointRate: string;
  pointUp: boolean;
  startDate: string;
}

interface CustomEventDetail {
  pointBackInfo: PointBackInfo;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const CloseButton = styled(Button)`
  background-color: black;
  color: white;
`;

const ConfirmModal: React.FC = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [pointBackInfo, setPointBackInfo] = React.useState<PointBackInfo>();

  React.useEffect(() => {
    window.addEventListener("adConfirm", ((event: CustomEvent) => {
      const pointBackInfo = event.detail.pointBackInfo;
      setPointBackInfo(pointBackInfo);
      setIsOpen(true);
    }) as EventListener);
  }, []);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="Overlay"
      >
        <Flex justifyContent="flex-end" mb={2}>
          <CloseButton onClick={closeModal} fontSize={[1]}>
            close
          </CloseButton>
        </Flex>

        <Flex
          flexDirection="column"
          flexWrap="nowrap"
          justifyContent="center"
          width={360}
        >
          <Box bg="lightgray" p={3} mb={2} />

          <Box bg="lightgray" p={1} mb={1} />
          <Box bg="lightgray" p={1} mb={1} />

          {pointBackInfo && (
            <Flex
              justifyContent="space-between"
              alignItems="center"
              flexWrap="nowrap"
            >
              <Box width={1 / 4}>
                <Image src={pointBackInfo.logoUrl} alt={pointBackInfo.name} />
              </Box>
              <Box width={3 / 4} p={1}>
                <Box>{pointBackInfo.name}</Box>
                <Box color="green">{pointBackInfo.pointRate}%</Box>
                <Box>
                  {moment(pointBackInfo.endDate).format(
                    "YYYY-MM-DD hh:mm まで"
                  )}
                </Box>
              </Box>
            </Flex>
          )}

          <Box bg="lightgray" p={2} mb={1} width={1 / 2} />
          <Box bg="lightgray" p={1} mb={1} />
          <Box bg="lightgray" p={1} mb={1} />
          <Box bg="lightgray" p={1} mb={1} />
          <Box bg="lightgray" p={1} mb={1} />

          <Box bg="lightgray" p={2} mb={1} width={1 / 2} mt={2} />
          <Box bg="lightgray" p={1} mb={1} />
          <Box bg="lightgray" p={1} mb={1} />
          <Box bg="lightgray" p={1} mb={1} />
          <Box bg="lightgray" p={1} mb={1} />
        </Flex>
      </Modal>
    </div>
  );
};

export default ConfirmModal;
