const path = require('path');
const { getLoader, loaderByName } = require('@craco/craco');

const packages = ['btns', 'core'];
const absolutePaths = [];
packages.forEach((item) => {
  absolutePaths.push(path.join(__dirname, `packages/${item}/src`));
});

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const { isFound, match } = getLoader(webpackConfig, loaderByName('babel-loader'));
      if (isFound) {
        const include = Array.isArray(match.loader.include) ? match.loader.include : [match.loader.include];
        match.loader.include = include.concat(absolutePaths);
        console.log('Loading sources from:', match.loader.include);
      }

      return webpackConfig;
    },
  },
};
