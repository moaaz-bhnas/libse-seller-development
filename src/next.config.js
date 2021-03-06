const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
  distDir: "../.next",
  webpack(config) {
    // url loader
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/,
      // include: [path.resolve(__dirname, 'node_modules/react-images-upload')],
      use: {
        loader: "url-loader",
      },
    });

    // Add the new plugin to the existing webpack plugins
    config.plugins.push(new Dotenv({ silent: true }));

    return config;
  },
};
