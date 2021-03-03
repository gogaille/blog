const vercelUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : null;

const publicPath = process.env.PUBLIC_PATH
  ? process.env.PUBLIC_PATH.trim().replace(/\/$/, "")
  : null;

if (!vercelUrl && !publicPath) {
  throw new Error(
    "No VERCEL_URL or PUBLIC_PATH environment variables available.",
  );
}

module.exports = {
  env: {
    PUBLIC_PATH: vercelUrl || publicPath,
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
