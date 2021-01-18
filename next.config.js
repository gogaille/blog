const publicPath = process.env.PUBLIC_PATH;
if (!publicPath) {
  throw new Error("The PUBLIC_PATH path environment variable is missing.");
}

module.exports = {
  env: {
    PUBLIC_PATH: publicPath,
  },
};
