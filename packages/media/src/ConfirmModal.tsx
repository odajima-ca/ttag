import moment from "moment";
import React from "react";
import Modal from "react-modal";
import { Box, Button, Flex, Image } from "rebass/styled-components";
import styled from "styled-components";

interface PointBackInfo {
  endDate: string;
  logoUrl: string;
  name: string;
  pointRate: string;
  pointUp: boolean;
  startDate: string;
}

interface Ad {
  pointBackInfo: PointBackInfo;
  name: string;
  price: number;
  url: string;
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
  const [ad, setAd] = React.useState<Ad>();
  const [redirectUrl, setRedirectUrl] = React.useState();
  const [redirectLoginUrl, setRedirectLoginUrl] = React.useState();

  React.useEffect(() => {
    window.addEventListener("adConfirm", ((event: CustomEvent) => {
      const { ad, redirectUrl, redirectLoginUrl } = event.detail;

      setAd(ad);
      setRedirectUrl(redirectUrl);
      setRedirectLoginUrl(redirectLoginUrl);
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

        {ad && (
          <Flex
            justifyContent="space-between"
            alignItems="center"
            flexWrap="nowrap"
          >
            <Box width={1 / 4}>
              <Image
                src={ad.pointBackInfo.logoUrl}
                alt={ad.pointBackInfo.name}
              />
            </Box>
            <Box width={3 / 4} p={1}>
              <Box>{ad.pointBackInfo.name}</Box>
              <Box color="green">{ad.pointBackInfo.pointRate}%</Box>
              <Box>
                {moment(ad.pointBackInfo.endDate).format(
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

        {redirectUrl && redirectLoginUrl && (
          <Flex
            justifyContent="space-between"
            alignItems="center"
            flexWrap="nowrap"
          >
            <Box width={1 / 2} p={1}>
              <Button
                variant="primary"
                width={1}
                as="a"
                href={redirectLoginUrl}
                target="_blank"
              >
                ログイン
              </Button>
            </Box>
            <Box width={1 / 2} p={1}>
              <Button
                variant="primary"
                width={1}
                as="a"
                href={redirectUrl}
                target="_blank"
              >
                クリック
              </Button>
            </Box>
          </Flex>
        )}
      </Flex>
    </Modal>
  );
};

export default ConfirmModal;
