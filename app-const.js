//examples of const
"use strict";
function exampleConstants() {
    const items=40;
    //items=90;
    //const numberOf;
    return items;
}

//console.log(exampleConstants());

//declaring objects with constants
function constObjects() {
    const name = {
        person: "reefath"
    }
    
    name.person = "tesla"
    
    return name.person;
}

//console.log(constObjects());