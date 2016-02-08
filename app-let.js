//Hoisting

"use strict";

//var declarations
function hoistExampleVar(cond) {
    if(cond) {
        var value = 'one';
        console.log("value in if loop", value);
        return value;
    } else {
        console.log("value in else loop", value);
        return null;
    }

}

//console.log("what's in value?", hoistExampleVar(false));

//let declarations
function exampleLet(cond) {
    if(cond) {
        let value ='one';
        console.log("value in if loop", value);
        return value;
        
    } else {
        console.log("value in else loop", value);
        return null;
    }
}


//console.log("what's in value?", exampleLet(false));

//Redeclaration
function redeclare(cond) {
    var value = 40;
    if(cond) {
        let value =20;
        console.log("value in if loop", value);
        return value;
        
    } else {
        console.log("value in else loop", value);
        return value;
    }
}

//console.log("what's in value?", redeclare(false));
