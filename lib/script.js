"use strict";

// npm init

// npm install babel-cli -D
// npm install babel-preset-env -D
// other developers can simply run 'npm install' to install all the packages in devDependencies of package.json
// make .babelrc file in root directory
// in package.json add key and value "scripts": "build": "babel src -d lib"

var pasta = "Spaghetti"; // ES5 syntax

var meat = "Pancetta"; // ES6 syntax

var sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
var carbonara = "You can make carbonara with " + pasta + ", " + meat + ", and a sauce made with " + sauce + ".";