module.exports = {
  stories: ['../../../**/src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: 'storybook-preset-craco',
      options: {
        cracoConfigFile: '../../craco.config.js',
      },
    },
  ],
};
