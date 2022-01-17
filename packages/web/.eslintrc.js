module.exports = {
  extends: ["@my-app/eslint-config", "plugin:react-hooks/recommended"],
  rules: {
    "no-restricted-imports": [
      "error",
      {
        patterns: ["@mui/*/*", "!@mui/material/test-utils/*", "!@mui/material/styles"],
      },
    ],
  },
};
