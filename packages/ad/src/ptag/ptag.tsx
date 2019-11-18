import initializeApp from "./initializeApp";

(function() {
  const mediaId =
    (document &&
      document.currentScript &&
      document.currentScript.getAttribute("data-mediaId")) ||
    "";

  initializeApp({ mediaId });
})();
