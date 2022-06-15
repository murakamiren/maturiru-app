module.exports = {
    env: {
        es2021: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:react-hooks/recommended",
        "prettier"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        project: "./tsconfig.json"
    },
    plugins: ["react", "react-hooks", "@typescript-eslint", "import"],
    rules: {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "react/react-in-jsx-scope": "off",
        "import/order": [
            "error",
            {
                groups: [
                    "builtin", // 組み込みモジュール
                    "external", // npmでインストールした外部ライブラリ
                    "internal", // 自作モジュール
                    ["parent", "sibling"],
                    "object",
                    "type",
                    "index"
                ],
                "newlines-between": "always",
                pathGroupsExcludedImportTypes: ["builtin"],
                alphabetize: {
                    order: "asc", // 昇順にソート
                    caseInsensitive: true // 小文字大文字を区別する
                }
            }
        ]
    }
};
