//default parameter in ecma5
function defaults(req, opt1, opt2, callback) {
     opt1= opt1 || 1000;
     //opt2 = (typeof opt2!== "undefined") ?opt2:"defaultopt2"
     callback = callback || function(){
        console.log("default call back");
         //rest of the function
     }
     
     console.log(opt1);
    //console.log(opt2);
    
}

//defaults("/account");
//defaults("/account", 0);
//defaults("/account", undefined);

//default parameter in ecma6
function makeRequest(url, timeout = 2000, callback) {
    console.log(timeout);
}

//makeRequest("/foo"); //default value of timeout
//makeRequest("/foo", null, function(){console.log("fn body")});

//example to demonstrate the arguments object - ecma non-strict mode
function argNonStrictMode(first, second) {
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    first = "c";
    second="d";
    
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    
}
//argNonStrictMode("a","b");

//example to demonstrate the arguments object - ecma strict mode / ECMA6
function argStrictMode(first, second) {
    "use strict";
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    first = "c";
    second="d";
    
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    
}
//argStrictMode("a", "b");

function argDefaultParameter(first, second="b") {
    "use strict";
    console.log(arguments.length);
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    first = "c";
    second="d";
    
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    
}

//argDefaultParameter("a");

//***********Default paramter expressions************
    function getValue() {
        return 5;
    }
    
    function add(first, second=getValue()) {
        console.log( first + second);
    }

//add(10);
//add(10, 9);

//********Unnamed parameters ECMA5 ***************
/*
problems - not clear that this function can handle many parameters
start from the 2nd parameter
*/
function underscorePick_ECMA5(object) {
    let result = {};
    
    for(let i=1, len=arguments.length; i<len; i ++) {
        result[arguments[i]] = object[arguments[i]];
    }
    
    return result;
}

let bookDetails = {
    book: "mocking jay",
    author: "suzanne collins",
    year: "2010"
}

let result = underscorePick_ECMA5(bookDetails, "author", "year");
//console.log(result.author);
//console.log(result.year);
//console.log(underscorePick_ECMA5.length);

//**************unnamed parameter ECMA6 REST parameters **********
/*
rest parameters can be used only at the end
*/
function underscorePick_ECMA6(object, ...keys) {
    let result = {};
    
    for(let i=0, len=keys.length; i<len; i ++) {
        result[arguments[i]] = object[arguments[i]];
    }
    
    return result;
}

let bookDetails1 = {
    book: "mocking jay",
    author: "suzanne collins",
    year: "2010"
}

let result1 = underscorePick_ECMA5(bookDetails1, "author", "year");
//console.log(result1.author);
//console.log(result1.year);
//
//console.log(underscorePick_ECMA6.length);

// rest parameters & arguments work well with each other
function restArgs(...keys) {
    console.log(keys.length === arguments.length);
    console.log(keys[0], arguments[0]);
    console.log(keys[1], arguments[1]);
    
}

//restArgs("a", "b");

//*************spread operator*************
function arrayHandling_ECMA5() {
    let arr= [20,18,3,255,100];
    //apply accepts an array and it applies the array as parameters to the actual function
    console.log(Math.max.apply(Math,arr));
}

//arrayHandling_ECMA5();

function spread_ECMA6() {
    let arr= [20,18,3,355,100];
    console.log(Math.max(...arr));
}

spread_ECMA6();








