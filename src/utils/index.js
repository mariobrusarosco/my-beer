const path = require('path')

const mkdirCallback = function(error, cwd) {
  // debugger
  // return function() {
    if (error) {
      console.log('It was not possible to create a configuration folder: ', error)
      return process.exit()
    }
    process.exit()
}

const createExternalPackageJSON = (answersMap) => {
  const { projectName } = answersMap

  console.log(answersMap)

  const packageJSON = `{
    "name": "${projectName}",
    "description": "${projectName}",
    "private": true,
    "scripts": {
      "dev": "create-galofha start"
    },
    "devDependencies": {
      "@babel/core": "^7.2.2",
      "@babel/plugin-proposal-class-properties": "^7.3.3",
      "@babel/plugin-proposal-optional-chaining": "^7.2.0",
      "@babel/plugin-syntax-dynamic-import": "^7.2.0",
      "@babel/plugin-transform-async-to-generator": "^7.2.0",
      "@babel/plugin-transform-runtime": "^7.2.0",
      "@babel/polyfill": "^7.2.5",
      "@babel/preset-env": "^7.2.3",
      "@babel/preset-react": "^7.0.0",
      "clean-webpack-plugin": "^1.0.0",
      "compression-webpack-plugin": "^2.0.0",
      "css-loader": "^1.0.1",
      "dotenv": "^6.2.0",
      "html-webpack-plugin": "^3.2.0",
      "webpack": "^4.26.0",
      "webpack-cli": "^3.1.2",
      "webpack-dev-server": "^3.1.10"
    }
  }`

}



module.exports = {
  mkdirCallback,
  createExternalPackageJSON
}
