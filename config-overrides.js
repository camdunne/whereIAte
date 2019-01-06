const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = function override(config, env) {
  const conf = config;
  conf.plugins = config.plugins.map((plugin) => {
    if (plugin.constructor.name === 'GenerateSW') {
      return new WorkboxWebpackPlugin.InjectManifest({
        swSrc: './src/sw.js',
        swDest: 'service-worker.js',
      });
    }

    return plugin;
  });
  return conf;
};
