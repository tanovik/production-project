module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:i18next/recommended",
    "plugin:storybook/recommended"
  ],
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["tsconfig.json"],
  },
  plugins: ["react", "@typescript-eslint","i18next"],
  rules: {
	  "indent": "off",
    "react/jsx-indent": [2, 4],
	"react/jsx-indent-props": [2, 4],
    // "indent": [2, 4],
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".tsx", ".ts"] },
      // { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
	"react/prop-types": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "warn",
    "no-underscore-dangle": "off",
    "@typescript-eslint/strict-boolean-expressions": "warn",
	"@typescript-eslint/indent": [2, 4],
	"@typescript-eslint/no-non-null-assertion": "warn",
	"@typescript-eslint/naming-convention": "warn",
	"i18next/no-literal-string": ['warn', {markupOnly: true,
	"ignoreAttribute":['data-testid', 'to']
	}],
	"import/no-webpack-loader-syntax": "off",
	"max-len": ["error", {"ignoreComments": true, "code": 100}],
	"react/display-name": "off",
	"@typescript-eslint/prefer-includes": "off",
	"@typescript-eslint/no-var-requires": "warn",
	"@typescript-eslint/no-floating-promises": "warn"

  },
  globals: {
    "__IS_DEV__": true,
  },
  overrides:[
	{
		files: ['**/src/**/*.test.{ts,tsx}'],
		rules: {
			'i18next/no-literal-string':"off"
		}
	}
  ]
};
