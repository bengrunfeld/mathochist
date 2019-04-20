module.exports = {
  "plugins": [ "react", "jest", "@typescript-eslint" ], 
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": { "jsx": true }, // Allows for the parsing of JSX
    "project": "./tsconfig.json"  
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "extends": [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:jest/recommended', 
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ]
};


// https://github.com/jest-community/eslint-plugin-jest
