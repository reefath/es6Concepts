/*
var p = {};

Creates an object that inherits the properties and methods from Object.

var p2 = Object.create(null);

Creates an object that doesn't inherit anything.

*/

//ECMA 5 sets & maps

"use strict";

let setCreate = Object.create(null);
setCreate.foo = true;

if(setCreate.foo) {
    //check for existense
}

let map = Object.create(null);

map.foo = "bar";

/*translates to key value pair

map = {
    foo: "bar"
}
*/

let value = map.foo;
console.log("map key value of foo ---", value);

//What are problems with the approach?
let map1 = Object.create(null);
map1[5] = "foo";

console.log("problems with map in ecma5", map1["5"]);

//internally the numberic value of 5 gets converted to string "5". So we cannot have strings & numbers as different keys in //maps in ECMA 5


//========================================== Sets in ECMA 6 =================================================
let set = new Set();
set.add(5);
set.add("5");
console.log("set.size no duplicate",set.size);
set.add(5);
console.log("set.size added duplicate",set.size);
set.delete(5);
console.log("set.size after deletion",set.size);
set.clear();
console.log("set elements after clearing",set.has(5));

//forEach - three arguments as in array & map just to be consistent - key, value, callback function
//key & value are same in case of Set


let setExample = new Set([4, 5, 5, 6, 78 ,6 ,7]);

setExample.forEach(function(value, key, ownSet) {
    console.log(key, ":", value);
    console.log(ownSet === setExample);

});

  let processSet = {
    output: function(val) {
        console.log("value printed in function", val);
    },
      
    processor: function(data) {
        data.forEach((element)=> this.output(element));
    }
  } 
  
  processSet.processor(setExample);

//sets & arrays

let setToArray = [...setExample];

console.log("set to array using spread operator", setToArray);

//remove duplicates in a array using set

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log("example to remove duplicates", removeDuplicates([1,1,1,0,30]));


//weak sets - why do we need it?

let setOfObjects = new Set();
let keyObj = {
    name: "Tia"
};

setOfObjects.add(keyObj);

//set the reference of the original object to null

keyObj = null;

console.log("is key Object available", setOfObjects.has(keyObj));
console.log("is key Object available", setOfObjects.size);

console.log("conver to array", [...setOfObjects][0]);

//whats happening here? Though the reference element os set to null, the set still holds a reference to the object. And the //object cannot be garbaged.

//this might lead to memory leak.

//======= weak maps doesnt prevent garbage collection if its the only reference remaining - use if need to track object //reference



let weakSet = new WeakSet();
let keyObj1 = {
    name: "Ria"
}

weakSet.add(keyObj1);

keyObj1 = null;

//the reference from the weak set is also removed


//========================================== Maps in ECMA 6 =================================================


//uses object.is() for keys equivalence.

let mapExample = new Map();

mapExample.set("company", "PYPL");
mapExample.set("location", "SJC");

console.log("map example get --", mapExample.get("company"));
console.log("map example get --", mapExample.get("location"));

let mapObject = new Map();

let key1 = {};
let key2 = {};

mapObject.set(key1, {hobby: "painting"});

console.log("keys objects", mapObject.get(key1));

console.log("maps has function", mapExample.has("company"));

console.log("maps delete function", mapExample.delete("company"));

console.log("maps size ", mapExample.size);

//map initialization

let mapInit = new Map([["language", "JS"], ["interest", "programming"]]);

console.log("mapInit.has ", mapInit.has("language"));

console.log("mapInit.get ", mapInit.get("language"));

//for each in maps


mapInit.forEach(function(value, key, ownMap) {
    console.log("key value", key + ":" + value);
    console.log(ownMap === mapInit);
})























    
  
















