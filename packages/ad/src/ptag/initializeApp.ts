class AdInfo {
  public origin: string | null;
  public status: string | null;
  public window: WindowProxy | null;

  constructor() {
    this.origin = null;
    this.status = "initialized";
    this.window = null;
  }
}

const initializeApp = () => {
  const adInfo = new AdInfo();

  window.addEventListener("message", (event: MessageEvent) => {
    const ptag = event.data && event.data.ptag;

    let message;

    let newOrigin;
    let newStatus;
    let newWindow;
    let sendStatus;

    let shouldConfirm = false;

    if (ptag) {
      switch (ptag.type) {
        case "handshake":
          newOrigin = event.origin;
          newStatus = "handshake";
          newWindow = event.source as WindowProxy;
          sendStatus = "connected";

          message = {
            atag: {
              type: sendStatus
            }
          };

          break;

        case "clicked":
          newStatus = "clicked";
          sendStatus = "confirm";

          shouldConfirm = true;

          message = {
            atag: {
              type: sendStatus
            }
          };

          break;
      }

      console.log("Parent receive message", adInfo.status, "to", newStatus, {
        origin: newOrigin || adInfo.origin,
        status: newStatus,
        window: newWindow || adInfo.window
      });

      if (newOrigin) adInfo.origin = newOrigin;
      if (newStatus) adInfo.status = newStatus;
      if (newWindow) adInfo.window = newWindow;

      if (adInfo.window && adInfo.origin && message) {
        console.log("Parent send message", sendStatus, message);
        adInfo.window.postMessage(message, adInfo.origin);

        if (shouldConfirm) {
          if (window.confirm("確認ダイアログ")) {
            newStatus = "confirmed";
            sendStatus = "confirmedTheYes";

            message = {
              atag: {
                type: sendStatus
              }
            };

            if (newStatus) adInfo.status = newStatus;

            console.log("Parent send message", sendStatus, message);
            adInfo.window.postMessage(message, adInfo.origin);
          } else {
            newStatus = "confirmed";
            sendStatus = "confirmedTheNo";

            message = {
              atag: {
                type: sendStatus
              }
            };

            if (newStatus) adInfo.status = newStatus;

            console.log("Parent send message", sendStatus, message);
            adInfo.window.postMessage(message, adInfo.origin);
          }
        }
      }
    }
  });
};

export default initializeApp;
