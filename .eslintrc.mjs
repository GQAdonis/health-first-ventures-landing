export default {
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react"],
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}
