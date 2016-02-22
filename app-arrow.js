/*********** Arrow functions *****************
Arrow functions are designed to be used in place of anonymous function expressions


No this, super, arguments, and new.target bindings - The value of this, super, arguments, and new.target inside of the function is by the closest containing nonarrow function. 
Cannot be called with new - Arrow functions do not have a [[Construct]] method and therefore cannot be used as constructors. Arrow functions throw an error when used with new.
No prototype - since you can’t use new on an arrow function, there’s no need for a prototype. The prototype property of an arrow function doesn’t exist.
Can’t change this - The value of this inside of the function can’t be changed. It remains the same throughout the entire lifecycle of the function.
No arguments object - Since arrow functions have no arguments binding, you must rely on named and rest parameters to access function arguments..
No duplicate named arguments - arrow functions cannot have duplicate named arguments in strict or nonstrict mode, as opposed to nonarrow functions that cannot have duplicate named arguments only in strict mode.


*********** Arrow functions *****************/


//syntax - arrow function takes a single argument and simply returns it

let reflect = value => value;

//equivalent to 

let reflect_ecma5 = function(value) {
    return value;
}

console.log(reflect_ecma5("ES5"));
console.log(reflect("ES6"));

//syntax - more than one argument - must include parentheses around those arguments
let twoArg = (arg1, arg2) => arg1 + arg2;

//equivalent to 
let twoArgTraditional = (arg1, arg2) => {
    return arg1 + arg2;
}

//equivalent to
let twoArg_ecma5 = function(arg1, arg2) {
    return (arg1 + arg2);
}

//syntax - returning object
let retObj = id => ({id: id, name: "PYPL_ES6"})

//equivalent to 
let retObj_ecma5 = function(name) {
    return {
        id: "1796",
        name: name
    }
}

console.log(twoArg(5, 6));
console.log(twoArg_ecma5(5,9));
console.log(twoArgTraditional(10,22));
console.log(retObj(1786));
console.log(retObj_ecma5("PayPal_ES5"));

//No this binding

/*** problem with this in ES5

Non-method functions
Methods
Constructors
functions always have their own this -  decided dynamically by how the functions are called.

***/

function ConstrExampleECMA5(prefix) {
    this.prefix = prefix;
}

ConstrExampleECMA5.prototype.prefixArr = function(arr) {
    "use strict";
   return arr.map(function(x) {
        return this.prefix + x;          
   });
}

var pre = new ConstrExampleECMA5("miss");
//console.log(pre.prefixArr(['pauline', 'randy']));



// solution 1 that = this;

function Prefixer(prefix) {
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
    var that = this; // (A)
    return arr.map(function (x) {
        return that.prefix + x;
    });
};

var sol1 = new Prefixer("miss");
//console.log(sol1.prefixArray(['pauline', 'randy']));

//solution 2 - extra parametrs 

function PrefixerExtra(prefix) {
    this.prefix = prefix;
}
PrefixerExtra.prototype.prefixArray = function (arr) {
    return arr.map(function (x) {
        return this.prefix + x;
    }, this); 
};

var sol2 = new Prefixer("miss");
//console.log(sol2.prefixArray(['pauline', 'randy']));


//solution 3 - bind(this)


function PrefixerBind(prefix) {
    this.prefix = prefix;
}
PrefixerBind.prototype.prefixArray = function (arr) {
    return arr.map(function (x) {
        return this.prefix + x;
    }.bind(this)); 
};

var sol3 = new PrefixerBind("Bind");
//console.log(sol3.prefixArray(['pauline', 'randy']));

/********** arrow function - this ***********
    lexical this - value determined by the surrounding scope
**************/

function ArrowSolution(prefix) {
    this.prefix = prefix;
}

ArrowSolution.prototype.prefixArray = function(arr) {
    return arr.map((x)=> this.prefix + x); //this is lexical
}

var arrow = new PrefixerBind("Arrow");
console.log(arrow.prefixArray(['pauline', 'randy']));







