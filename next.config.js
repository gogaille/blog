const publicPath = process.env.PUBLIC_PATH;
if (!publicPath) {
  throw new Error("The PUBLIC_PATH path environment variable is missing.");
}

module.exports = {
  env: {
    PUBLIC_PATH: publicPath.trim().replace(/\/$/, ""),
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
};
