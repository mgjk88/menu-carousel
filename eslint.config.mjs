import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["webpack/"],
  },
  pluginJs.configs.recommended,
];
