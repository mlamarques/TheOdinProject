# webpack: The Core Concepts

[source](https://webpack.academy/p/the-core-concepts)

[getting started](https://webpack.js.org/guides/getting-started/)


## Resume of the course


# Installation

Requirements: You will need to have NodeJS, npm/yarn installed!

npm init -y (will create a package.json file)

npm install webpack webpack-cli --save-dev (--dev adds a dev dependancy in the package.json)
```
in the package.json file we add 
"script": {
    "build": "webpack"
}
```
we create :
```
 |- index.html
 |- /src
   |- index.js
```

# Your first webpack config 

create a webpack.config.js in the main folder
config the webpack.config.js file (https://webpack.js.org/configuration/)
npm run build (will create the bundle file with the name of the output in the webpack.config.js)

update the html source file for the bundle script: (<script src="main.js"></script>)

# Output - Changing your bundle location!  

in the webpack.config.js file from the website there is already a bundle location config

# The Dependency Graph 

webpack will create modules from all the dependencies from the entry file (src/index.js)

# Watch Mode 

webpack has a watch mode that automatic updates changes in the files.

we can create a script to run it:

/package.json: scripts: "watch": "webpack --watch"

then: npm run watch

# Loaders and Rules: Introduction 

In webpack you can create loarders which is a type of transform that treads any type of asset as a module even if it is not bundle together and in the end turns it back to JavaScript so webpack can add it to the dependence grapgh.

To create a loader, put it inside the webpack.config.js file:

module: {

  }


# Loaders and Rules: Test and Use 

How to config a loader: Inside the 'module' you can create a rule. Which rule set is an object and it takes two properties that are required.

1. test: Is the file type that has to receive the transform. You use regex. Ex: /\.js$/ (all the .js files will receive this loader)

2. use: The name of the loader. Ex: "babel-loader" (you can chain loaders if you want)

```
module: {
      rules: [
          {
            test: /\.js$/,
            use: "babel-loader"
          },
          {
            test: /\.css$/,
            use: [
              "style-loader",
              "css-loader"
            ]
          }
      ]
}
```

# Loaders and Rules: Setting Loader Options  

To add options to loaders you change the data type of the use config from string to object (" " -> { }) and then create an option property.

```
{
  test: /\.jpe?g$/,
  use: [
    {loader: "url-loader", options: {
      limit: 10000
    }}
  ]
}
```

# Loaders and Rules: Using your first loader!  

The string we use tor identify the loader acctually come from de node_modules folder. So if you don't have installed, you will need to.
Example:
```
npm install file-loader
```

# Plugins: Introduction   

The difference between a Loader and a Plugin is that a Plugin can perform any functionality that Loaders couldn't, like create changes for multiple files, bundles of css, etc.

In this example, the plugin logs a message everytime webpack is run:

```
class ExamplePlugin {
  apply(compiler) {
    compiler.plugin("run", (compiler, callback) => {
      console.log(`WEBPACK IS RUNNING`);
      callback();
    });
  }
}
```


# Plugins: How to use   

To use a Plugin you create a plugins array in the config (webpack.config.js file) *you pull in the plugin from the location as a 'const':

```
const ExamplePlugin = require("./ExamplePlugin.js")

module.exports = {
  entry: "",
  output: {},
  module: {
    rules: []
  },
  plugins: [
    new ExmaplePlugin()
  ]
}
```

because a plugin is a class, we create a new stance of it with "new"

Using custom webpack plugins:

```
const ExamplePlugin = require("./ExamplePlugin.js")
const webpack = require("webpack")

module.exports = {
  entry: "",
  output: {},
  module: {
    rules: []
  },
  plugins: [
    new ExmaplePlugin()
    new webpack.optimize.UglifyJsPlugin()
    new.webpack.ContextReplacementPlugin()
  ]
}
```
When you want to use a plugin you add it to your file and you pass a new reference for it

# Review & Resources  

Webpack has 4 core concepts:

* entry
* output
* rules/loaders
* plugins

The first two are related to eachother. The entry is the first file that webpack uses to create its dependency graph.

The output tell webpack how and where to put the bundles and how to format them.

rules/loaders describe to webpack how to treat files before they are added to the depency graph on a profile basis. Allow any asset to be treated like a module in the graph.

plugins allow to perfom any other kind of functionality and are extremely customizable. There are many built in plugins out of the box that webpack already provides.

for more information: [webpack documentation page](https://webpack.js.org/concepts/)

full Odin class: [webpack](https://www.theodinproject.com/courses/javascript/lessons/webpack-2)