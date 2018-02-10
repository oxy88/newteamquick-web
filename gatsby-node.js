const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const webpack = require("webpack");
const _ = require("lodash");

exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case "build-javascript":
      config.plugin("webpack-bundle-analyzer", BundleAnalyzerPlugin, [
        {
          analyzerMode: "static",
          reportFilename: "./static/report.html",
          generateStatsFile: true
        }
      ]);
      config.plugin("CommonsChunkPlugin", webpack.optimize.CommonsChunkPlugin, [
        {
          name: `commons`,
          chunks: [`app`, `component---src-layouts-index-js`, `component---src-pages-index-js`],
          minChunks: (module, count) => {
            const vendorModuleList = [
              `react`,
              `react-dom`,
              `fbjs`,
              `react-router`,
              `react-router-dom`,
              `gatsby-react-router-scroll`,
              `dom-helpers`, // Used in gatsby-react-router-scroll
              `path-to-regexp`,
              `isarray`, // Used by path-to-regexp.
              `scroll-behavior`,
              `history`,
              `resolve-pathname`, // Used by history.
              `value-equal`, // Used by history.
              `invariant`, // Used by history.
              `warning`, // Used by history.
              `babel-runtime`, // Used by history.
              `core-js`, // Used by history.
              `loose-envify`, // Used by history.
              `prop-types`,
              `gatsby-link`,
              `jss`,
              `material-ui`,
              `color`,
              `color-convert`,
              `react-jss`,
              `theming`,
              `color-name`
            ];
            const isFramework = _.some(
              vendorModuleList.map(vendor => {
                const regex = new RegExp(`[\\\\/]node_modules[\\\\/]${vendor}[\\\\/].*`, `i`);
                return regex.test(module.resource);
              })
            );
            return isFramework || count > 2;
          }
        }
      ]);

      break;
  }

  return config;
};