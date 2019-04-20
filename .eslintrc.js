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
    "ecmaFeatures": { "jsx": true },
    "project": "./tsconfig.json"  
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "extends": [
    "plugin:jest/recommended", 
    "plugin:@typescript-eslint/recommended"
  ]
};


// https://github.com/jest-community/eslint-plugin-jest
