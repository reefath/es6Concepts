//var in global scoping - accidentally can overwrite the global object
//let & const does not create a property on the global object. 
"use strict";
var RegExp = "regexp";
//console.log(window.RegExp===RegExp);


//use const by default and only use let when you know a variable’s value needs to change. The rationale is that most variables //should not change their value after initialization because unexpected value changes are a source of bugs. This idea has a //significant amount of traction and is worth exploring in your code as you adopt ECMAScript 6.
