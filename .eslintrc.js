module.exports = {
    parser: 'babel-eslint',
    extends: [
        "react-app",
        // "airbnb-typescript",
        // "prettier/@typescript-eslint",
        // "plugin:prettier/recommended"
    ],
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    rules: {
        "react/jsx-index": "off",
        "react/prop-types": "off",
        "import/prefer-default-export": "off",
        "import/no-cycle": "off",
        "no-multi-assign": "off"
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
            "typescript": {}
        }
    },
    env: {
        jest: true,
        browser: true,
        node: true,
        es6: true
    },
    plugins: ['prettier', 'react', 'react-hooks', "import", "jest-dom"]
}
