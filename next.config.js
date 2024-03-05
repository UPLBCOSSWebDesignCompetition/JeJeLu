module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.resolve.fallback = { "path": require.resolve("path-browserify") };
  
      return config;
    },
  };