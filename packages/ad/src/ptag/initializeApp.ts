interface Attrs {
  mediaId: string;
  origin: string;
  placementId: string;
  window: WindowProxy;
}

class AdInfo {
  public mediaId: string;
  public origin: string;
  public placementId: string;
  public status: string;
  public window: WindowProxy;

  constructor(attrs: Attrs) {
    const { origin, window, mediaId, placementId } = attrs;

    this.mediaId = mediaId;
    this.origin = origin || "*";
    this.placementId = placementId;
    this.status = "initialized";
    this.window = window;
  }
}

interface Args {
  mediaId: string;
}

const createAdInfo = (event: MessageEvent) => {
  const ebisData = event.data && event.data.ebis;

  console.log(
    `[${ebisData.placementId}]`,
    "Parent receive message",
    "[handshake]",
    event.data
  );

  const adInfo = new AdInfo({
    origin: event.origin,
    window: event.source as WindowProxy,
    mediaId: ebisData.mediaId,
    placementId: ebisData.placementId
  });

  adInfo.window.postMessage(
    {
      ebis: {
        type: "connected",
        mediaId: adInfo.mediaId,
        placementId: adInfo.placementId
      }
    },
    adInfo.origin
  );

  console.log(
    `[${ebisData.placementId}]`,
    "Parent send message",
    "[handshake]",
    event.data
  );

  return adInfo;
};

const handleClick = (event: MessageEvent, adInfos: AdInfo[]) => {
  const ebisData = event.data && event.data.ebis;
  const adInfo = adInfos.find(
    adInfo => adInfo.placementId === ebisData.placementId
  );

  if (adInfo) {
    console.log(
      `[${ebisData.placementId}]`,
      "Parent receive message",
      "[clicked]",
      event.data
    );

    adInfo.status = "confirm";

    adInfo.window.postMessage(
      {
        ebis: {
          type: "confirmed",
          mediaId: adInfo.mediaId,
          placementId: adInfo.placementId
        }
      },
      adInfo.origin
    );

    console.log(
      `[${ebisData.placementId}]`,
      "Parent send message",
      "[clicked]",
      {
        ebis: {
          type: "confirmed",
          mediaId: adInfo.mediaId,
          placementId: adInfo.placementId
        }
      }
    );

    return true;
  }

  return false;
};

const openConfirm = (event: MessageEvent, adInfos: AdInfo[]) => {
  const ebisData = event.data && event.data.ebis;
  const adInfo = adInfos.find(
    adInfo => adInfo.placementId === ebisData.placementId
  );

  if (adInfo) {
    const adEvent = new CustomEvent("adConfirm", {
      detail: ebisData.data
    });
    window.dispatchEvent(adEvent);
  }

  return;
};

const initializeApp = (args: Args) => {
  const { mediaId } = args;
  const adInfos: AdInfo[] = [];

  window.addEventListener("message", (event: MessageEvent) => {
    const ebisData = event.data && event.data.ebis;

    if (ebisData && ebisData.mediaId === mediaId) {
      switch (ebisData.type) {
        case "handshake":
          adInfos.push(createAdInfo(event));
          break;

        case "clicked":
          if (handleClick(event, adInfos)) {
            openConfirm(event, adInfos);
          }
          break;
      }
    }
  });
};

export default initializeApp;
