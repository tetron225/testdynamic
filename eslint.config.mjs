import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { 
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.amd,
        ...globals.node 
      }
    },
    
  },
  pluginJs.configs.recommended,
];
