module.exports = {
    env: {
        browser: true,
        es6: true
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
            }
        },
    },
    extends: [
        "plugin:react/recommended",
        "airbnb",
        "airbnb-typescript",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: module
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "react-hooks",
        "jsx-a11y"
    ],
    "ignorePatterns": ["*.js", "*.jsx", "node_modules/"],
    rules: {
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
        'import/extensions': ['error', 'ignorePackages', {
            js: 'never',
            mjs: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
        }],
        "spaced-comment": ["error", "always", {
            markers: ["/"]
        }],
        "no-multi-spaces": "error",
        indent: ["error", 4, { "SwitchCase": 1 }],
        quotes: [
            1,
            "single"
        ],
        "jsx-quotes": [
            "warn",
            "prefer-double"
        ],
        semi: ["error", "always"],
        "array-element-newline": ["error", "always"],
        "array-bracket-newline": ["error", "always"]
    }
}

