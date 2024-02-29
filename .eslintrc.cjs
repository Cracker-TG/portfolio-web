/* eslint-disable */

module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["airbnb", "airbnb-typescript", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "prettier"],
  ignorePatterns: ["*.js", "./vite.config.ts"],
  rules: {
    "react/prop-types": ["off"],
    "prettier/prettier": [
      1,
      {
        trailingComma: "es5",
        singleQuote: true,
        semi: true,
      },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
      },
    ],
    "react/require-default-props": [2, { ignoreFunctionalComponents: true }],
    "react/jsx-props-no-spreading": ["off"],
    "import/extensions": ["off"],
    "default-param-last": ["off"],
    "@typescript-eslint/default-param-last": ["off"],
    "consistent-return": ["off"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["off"],
    "no-underscore-dangle": 0,
    "react/react-in-jsx-scope": "off",
  },
};
