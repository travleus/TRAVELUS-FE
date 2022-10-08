# 💡CREATE NEXT APP USING EMOTION STYLE WITH TYPESCRIPT

NEXT.JS를 이용한 프로젝트를 시작할때 편하게 시작할 수 있도록 도와주는 프로젝트

## 👋 ESLINT & PRETTIER
`ESLINT RULE`

```json
{
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module",
    "ecmaVersion": 12
  },
  "extends": [
    "next/core-web-vitals",
    "next",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "@next/next/no-img-element": "off"
  }
}
```

`PRITTIER RULE`
```json
{
  "bracketSpacing": true,
  "jsxBracketSameLine": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "arrowParens": "avoid",
  "semi": true,
  "printWidth": 120
}

```
## 👋 SRC폴더 절대경로 ALIAS 적용

## 👋 NORMALIZE 적용

## 👋 EMOTION 적용
