const multipleEntry = require("react-app-rewire-multiple-entry")([
  {
    entry: "src/atag/atag.tsx",
    template: "public/atag.html",
    outPath: "/atag.html"
  },
  {
    entry: "src/ptag/ptag.tsx",
    template: "public/ptag.html",
    outPath: "/ptag.html"
  }
]);

module.exports = function override(config, env) {
  multipleEntry.addMultiEntry(config);

  config.output.filename = "static/js/[name].js";
  config.output.chunkFilename = "static/js/[name].chunk.js";

  config.optimization.runtimeChunk = false;
  config.optimization.splitChunks = {
    cacheGroups: {
      default: false
    }
  };

  return config;
};
