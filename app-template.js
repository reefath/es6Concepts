"use strict";
//example to demonstrate basic syntax of template literals
function syntaxTL_ECMA6() {
    let greet=`Hola`;
    let greetbackTick=`\`Hola \` there`;
    console.log(greet);
    console.log(greetbackTick);
    console.log(typeof(greet));
    console.log(greet.length);
}

//syntaxTL_ECMA6();

//example to demonstrate multiple line strings in es5
function multipleLines_ECMA5() {
    var mulLines = "line1 \n\
line2";
    console.log(mulLines);
    var usingArrays= [
    "line1",
    "line2"
    ].join("\n")
    console.log("multiple line using arrays \n", mulLines);

}

//multipleLines_ECMA5();

//example to demonstrate multiple line strings using literals
function multipleLines_ECMA6() {
    let mulLines=`line1
line2`;
   console.log(mulLines); 
    console.log(mulLines.length);
    
    //newlines using new line
    let newLines=`line1\nline2`;
    console.log(newLines);
    console.log(newLines.length);
    
    var usingArrays= [
    `line1Arr`,
    `line2Arr`
    ].join(",")
    console.log(usingArrays);
}

//multipleLines_ECMA6();

//example to demonstrate substitutions
function substitutions_ECMA6() {
    let sub1 = `paypal`;
    let sub2 = `${sub1} is PYPL`;
    console.log(sub2);
    
    //TL inside of another TL
    let tl1 = `template literal 1`;
    
    let tl3 = `Hello, ${
        `this is ${ tl1 }`
    }.`; 
    console.log( tl3);
}

//substitutions_ECMA6();