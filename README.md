# π‘CREATE NEXT APP USING EMOTION STYLE WITH TYPESCRIPT

NEXT.JSλ₯Ό μ΄μ©ν νλ‘μ νΈλ₯Ό μμν λ νΈνκ² μμν  μ μλλ‘ λμμ£Όλ νλ‘μ νΈ

## π ESLINT & PRETTIER
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
## π SRCν΄λ μ λκ²½λ‘ ALIAS μ μ©

## π NORMALIZE μ μ©

## π EMOTION μ μ©
