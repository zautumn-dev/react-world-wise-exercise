import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      sourceType: "module",
      globals: {
        // https://eslint.org/docs/latest/use/configure/language-options#predefined-global-variables
        // 预定义全局变量
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // 识别 jsx 语法
        },
      },
    },
    // extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Vite + React 不需要 import React
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
    settings: {
      react: { version: "detect" },
    },
  },
];
