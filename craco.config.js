const path = require('path');
const { getLoader, loaderByName, ESLINT_MODES } = require('@craco/craco');
const { getPlugin, pluginByName } = require('@craco/craco/lib/webpack-plugins');

const apps = ['app-one'];
const packages = ['btns', 'core', 'stories'];
const absolutePaths = [];
packages.forEach((item) => {
  absolutePaths.push(path.join(__dirname, `packages/${item}/src`));
});
apps.forEach((item) => {
  absolutePaths.push(path.join(__dirname, `apps/${item}/src`));
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

      const { match: eslintPlugin } = getPlugin(webpackConfig, pluginByName('ESLintWebpackPlugin'));
      eslintPlugin.options['context'] = __dirname;
      eslintPlugin.options['files'] = ['apps', 'packages'];

      return webpackConfig;
    },
  },

  eslint: {
    enable: true,
    mode: ESLINT_MODES.extends,
  },

  jest: {
    configure: {
      setupFilesAfterEnv: ['../../config/jest/setupTests.js'],
    },
  },
};
