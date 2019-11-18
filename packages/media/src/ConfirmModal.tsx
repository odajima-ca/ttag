import React from "react";
import Modal from "react-modal";
import { Box, Button, Flex } from "rebass/styled-components";
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

const ConfirmModal: React.FC = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("adConfirm", (event: Event) => {
      console.log("adConfirm", event);
      setIsOpen(true);
    });
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
        <Flex
          flexDirection="column"
          flexWrap="nowrap"
          justifyContent="center"
          width={360}
        >
          <Box bg="lightgray" p={3} mb={2} />

          <Box bg="lightgray" p={1} mb={1} />
          <Box bg="lightgray" p={1} mb={1} />

          <Box p={4}>2.0% Hoge</Box>

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
