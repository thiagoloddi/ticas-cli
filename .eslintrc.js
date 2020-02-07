module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["standard", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "no-unused-vars": [1]
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": ["error"]
      }
    }
  ]
};
