import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import globals from "globals";
import { defineConfig, globalIgnores } from "eslint/config";
import reactRefresh from "eslint-plugin-react-refresh";

// Reflect.deleteProperty(reactHooks.configs["recommended-latest"], "plugins");

// 开发过程中在代码/页面 提示报错
export default defineConfig([
  globalIgnores(["dist"]),
  js.configs.recommended,
  reactRefresh.configs.next,
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],

    // plugins: {
    //   "react-hooks": reactHooks,
    // },
    // extends: ["react-hooks/recommended-latest"],
    extends: [reactHooks.configs["recommended-latest"]],

    // ...reactHooks.configs["recommended-latest"],
    // rules: {
    // ...reactHooks.configs.recommended.rules,
    // },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      sourceType: "module",
      globals: {
        // https://eslint.org/docs/latest/use/configure/language-options#predefined-global-variables
        // https://zh-hans.eslint.org/docs/latest/use/configure/language-options#%E6%8C%87%E5%AE%9A%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F
        // 预定义全局变量
        ...globals.browser,
      },
    },
    plugins: {
      react,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
    },
    rules: {
      ...react.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", // Vite + React 不需要 import React
    },
    settings: {
      react: { version: "detect" },
    },
  },
]);
