const NextFederationPlugin = require('@module-federation/nextjs-mf');

const getRemote = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    stableHost: `stableHost@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
    feedManager: `feedManager@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
    userAccount: `userAccount@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
  };
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'stableHost',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './theme': './configs/theme-configs.ts',
        },
        remotes: getRemote(options.isServer),
        shared: {
          './configs/theme-configs.ts': {},
        },
        extraOptions: {
          exposePages: true,
        },
      })
    );

    return config;
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
