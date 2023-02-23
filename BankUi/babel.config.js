// babel.config.js
module.exports = {
  presets: [
    '@babel/preset-env', 
    '@babel/preset-react'
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/transform-runtime",
    "inline-react-svg"
  ],
  env: {
    "test": {
      "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
        ]
      }
    }
  }