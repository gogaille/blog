// eslint-disable-next-line no-undef
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["eslint-plugin-react", "eslint-plugin-react-hooks"],
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    process: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:eslint-plugin-react/recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
