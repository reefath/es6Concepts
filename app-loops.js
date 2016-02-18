//var let const in loops

//dead zones - no hoisting for let const
"use strict"
function deadZones() {

    console.log(typeof(value));
    let value="one";

}

//console.log(deadZones());

//block binding in loops

function loops() {
    for(var i =0; i <10; i++) {
        //
    }
    console.log("var accessible outside loop",i);
    return i;
}
//console.log(loops());

//functions in loops
function funcLoops() {
    var funcArr=[];
    
    for(var i=0; i < 10; i ++) {
        funcArr.push(function(){
            console.log(i); 
        });
    }
    
    //prints 10 as value of i
    funcArr.forEach(function(func){
        func();
    })
    
    return true;
    
}

//console.log(funcLoops());

//IIFE to the rescue for var
function iifeToRescue() {
    var funcArr=[];
    
    for(var i=0; i <10; i ++) {
        funcArr.push((function(value){
            return function(){
                console.log(value);
            }
        })(i))
    }
    
    funcArr.forEach(function(func){
        func();
    })
    
    return true;

}

//console.log(iifeToRescue());


//let to the recue
function letToRescue() {
    let funcArr=[];
    for(let i=0; i <10; i ++) {
        funcArr.push(function(){
            console.log(i);
        })
    }
    
    funcArr.forEach(function(func){
        func();
    })
    
    return true;
}

//console.log(letToRescue());


//const in loops
function constInLoops() {
//    for(const i=0;i <10; i ++) {
//        console.log(i);
//    }

}

//console.log(constInLoops());