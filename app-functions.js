//default parameter in ecma5
function defaults_ECMA5(req, opt1, opt2, callback) {
     opt1= opt1 || 1000;
     opt2 = (typeof opt2!== "undefined") ?opt2:"defaultopt2"
     callback = callback || function(){
        console.log("default call back");
         //rest of the function
     }
     
     console.log(opt1);
    //console.log(opt2);
    
}

//defaults_ECMA5("/account");
//defaults_ECMA5("/account", 0);
//defaults_ECMA5("/account", undefined);

//default parameter in ecma6
function makeRequest_ECMA6(url, timeout = 2000, callback) {
    console.log(timeout);
}

//makeRequest_ECMA6("/foo"); //default value of timeout
//makeRequest_ECMA6("/foo", null, function(){console.log("fn body")});

//example to demonstrate the arguments object - ecma non-strict mode
function argNonStrictMode_ECMA5(first, second) {
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    first = "c";
    second="d";
    
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    
}
//argNonStrictMode_ECMA5("a","b");

//example to demonstrate the arguments object - ecma strict mode / ECMA6
function argStrictMode_ECMA6(first, second) {
    "use strict";
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    first = "c";
    second="d";
    
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    
}
//argStrictMode_ECMA6("a", "b");

function argDefaultParameter_ECMA6(first, second="b") {
    "use strict";
    console.log(arguments.length);
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    first = "c";
    second="d";
    
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    
}

//argDefaultParameter_ECMA6("a");

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
        result[keys[i]] = object[keys[i]];
    }
    
    return result;
}

let bookDetails1 = {
    book: "mocking jay",
    author: "suzanne collins",
    year: "2010"
}

let result1 = underscorePick_ECMA6(bookDetails1, "author", "year");
//console.log(result1.author);
//console.log(result1.year);
//
//console.log(underscorePick_ECMA6.length); //excluding the rest parameters

// rest parameters & arguments work well with each other
function restArgs(...keys) {
    console.log(keys.length === arguments.length);
    console.log(arguments[0] === keys[0]);
    console.log(keys[1]);
    
}

//restArgs("a", "b");

//*************spread operator*************
function arrayHandling_ECMA5() {
    let arr= [20,18,3,255,100];
    //apply accepts an array and it applies the array as parameters to the actual function
    console.log(Math.max.apply(Math,arr));
}

//arrayHandling_ECMA5();

let x = function spread_ECMA6() {
    let arr= [20,18,3,355,100];
    console.log(Math.max(...arr));
}

//x();

//*********name property of functions**********
//console.log(x.name);

//********* dual purpose functions

function State(initState) {
    this.initState = initState;
}

//When used as function constructor to init values

let state = new State("start");
//console.log(state); // the function's construct method id called that creates a new object and assigns the execute the function body with 'this' set to new object.

//when used without new
let state1 = State("start"); // the function's call method is executed that executes the function body
//console.log(state1);

//Determine how a function was called in ECMA5
function Person(name) {
    if(this instanceof Person) {
        this.name = name;
    } else {
        throw("not an instance of Person");
    }
}
let person = new Person("paypal");
//console.log(person);

//console.log(Person("paypal"));
let notAPerson = Person.call(person, "Mike"); 

//console.log(notAPerson);

//*********** new.target property in ECMA6*************
function Person1(name) {
    if(this instanceof Person1) {
        this.name = name;
    } else {
        throw("not an instance of Person1");
    }
}
let person1 = new Person1("paypal");
//console.log(person1);

//console.log(Person("paypal"));
let notAPerson1 = Person1.call(person1, "Mike"); 

//console.log(notAPerson1);

//************ block level functions ECMA6 strict mode************

    "use strict";

    if (true) {

        //console.log(typeof blockLevelFunc);        // "function"

        function blockLevelFunc() {
            // ...
        }

    blockLevelFunc();
    }



//console.log(typeof blockLevelFunc); 

//*************
















