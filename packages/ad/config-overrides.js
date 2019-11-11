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

  if (process.env.NODE_ENV === "production") {
    config.output.filename = "static/js/[name].[contenthash:8].js";
    config.output.chunkFilename = "static/js/[name].chunk.js";
  }

  config.optimization.runtimeChunk = false;
  config.optimization.splitChunks = {
    cacheGroups: {
      default: false
    }
  };

  return config;
};
