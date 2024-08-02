import pluginJs from "@eslint/js"; // Importing the default JavaScript rules from ESLint.
import importPlugin from "eslint-plugin-import"; // Importing the ESLint plugin for managing import/export syntax and ensuring consistent ordering of imports.
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"; // Importing the recommended configuration for integrating Prettier with ESLint.
import globals from "globals"; // Importing a set of predefined global variables for various environments, like browser and Node.js.
import tseslint from "typescript-eslint";
// Importing the ESLint plugin for TypeScript, providing linting capabilities for TypeScript code.

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  // Specifies the file patterns that ESLint should target, including JavaScript and TypeScript files.

  { languageOptions: { globals: globals.browser } },
  // Configures the environment globals to include browser-specific variables like `window` and `document`.

  pluginJs.configs.recommended,
  // Applies the recommended ESLint configuration for JavaScript.

  ...tseslint.configs.recommended,
  // Spreads in the recommended TypeScript ESLint configurations.

  eslintPluginPrettierRecommended,
  // Integrates Prettier with ESLint, using the recommended settings from `eslint-plugin-prettier`.

  {
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json"
          // Configures the resolver for TypeScript, pointing to the `tsconfig.json` file.
        }
      }
    },

    plugins: {
      import: importPlugin
      // Enables the `eslint-plugin-import` plugin to manage import/export syntax and module resolution.
    },

    rules: {
      "prettier/prettier": [
        "error",
        {
          semi: true,
          tabWidth: 2,
          endOfLine: "lf",
          bracketSpacing: true,
          bracketSameLine: false,
          arrowParens: "always",
          singleQuote: false,
          printWidth: 80,
          singleAttributePerLine: true,
          trailingComma: "none"
          // Custom Prettier rules for code formatting, enforced via ESLint.
        }
      ],

      "array-callback-return": [
        "error",
        {
          allowImplicit: true,
          checkForEach: true
        }
      ],
      // Ensures that array methods with callbacks (e.g., `map`, `filter`) always return a value.

      "default-case": "error",
      // Requires a `default` case in `switch` statements to ensure all possible cases are handled.

      "prefer-const": "error",
      // Enforces the use of `const` for variables that are never reassigned.

      "prefer-destructuring": "error",
      // Enforces destructuring of arrays and objects for assignment to improve code readability.

      "func-names": ["error", "always"],
      // Requires named functions to avoid anonymous function expressions, improving stack traces.

      "prefer-arrow-callback": "error",
      // Enforces the use of arrow functions as callbacks where appropriate.

      "object-curly-spacing": ["error", "always"],
      // Enforces consistent spacing inside curly braces.

      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "return" },
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        {
          blankLine: "any",
          prev: ["const", "let", "var"],
          next: ["const", "let", "var"]
        },
        { blankLine: "always", prev: "if", next: "if" }
      ],
      // Enforces padding lines between statements for better readability, especially around return statements, variable declarations, and conditional statements.

      "import/order": [
        "error",
        {
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true
          },
          pathGroups: [
            {
              pattern: "Api/**",
              group: "internal",
              position: "after"
            },
            {
              pattern: "Constants/**",
              group: "internal",
              position: "after"
            },
            {
              pattern: "Controllers/**",
              group: "internal",
              position: "after"
            },
            {
              pattern: "ErrorHandling/**",
              group: "internal",
              position: "after"
            },
            {
              pattern: "Middlewares/**",
              group: "internal",
              position: "after"
            },
            {
              pattern: "MongoDB/**",
              group: "internal",
              position: "after"
            },
            {
              pattern: "Utils/**",
              group: "internal",
              position: "after"
            }
          ],
          pathGroupsExcludedImportTypes: ["builtin"]
          // Enforces import order and grouping, with specific settings for internal modules.
        }
      ]
    }
  }
];
