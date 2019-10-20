const path = require('path')

module.exports = {
  extends: ['standard', 'standard-react'],
  parser: 'babel-eslint',
  rules: {
    'react/prop-types': 0,
    'object-curly-spacing': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.2.0'
    }
  }
}
