module.exports = {
  extends: [
    'mantine',
    'plugin:@next/next/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'arrow-body-style': 'off',
    'no-restricted-exports': 'off'
  },
};
