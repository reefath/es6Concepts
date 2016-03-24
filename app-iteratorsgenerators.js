//Iterators - a simple implementation in ecma 5

function iterator(items) {
    var i = 0;
    
    return {
        next: function() {
            
            let done = (i >= items.length);
            let value = !done? items[i++]: undefined;
            
            return {
                done: done,
                value: value
            
            }
        
        }
        
    }

}

let iterate = iterator([23,32,45,12]);


console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());


// ECMA 6 -- generators are special kind of function that returns an iterator

//yield keyword is used inside of generators to specify the values what iterator should return when the next is called

function *createIterator() {
    yield 1;
    yield 2;
    yield 3;
}


let iterat = createIterator();

console.log("generators returning iterator",iterat.next().value);
console.log("generators returning iterator",iterat.next().value);
console.log("generators returning iterator",iterat.next().value);
console.log("generators returning iterator",iterat.next().value);

//generator functions is that they stop execution after each yield statement, so yield 1 executes and then the function //doesn’t execute anything else until the iterator’s next() method is called.




// yield inside function loops


function *createIteratorLoop(arr) {
    for(let i=0; i <arr.length; i ++ ) {
        yield arr[i]
    }
}

let yieldfunctionloop = createIteratorLoop([23,32,45])
console.log(yieldfunctionloop.next());
console.log(yieldfunctionloop.next());
console.log(yieldfunctionloop.next());
console.log(yieldfunctionloop.next());


// can create a function expression

let funcExp = function *(items) {
    for(let i=0; i <items.length; i ++ ) {
        yield items[i]
    } 
}

let yielFuncExp = funcExp([99, 87, 12])

console.log("func exp", yielFuncExp.next());
console.log("func exp", yielFuncExp.next());
console.log("func exp", yielFuncExp.next());
console.log("func exp", yielFuncExp.next());


//cannot create an arrow function that's a generator

//generator object methods

let obj = {
    createIter: function *(items) {
        for(let i=0; i <items.length; i ++ ) {
            yield items[i];
        } 
    }

}

let genObjMethods = obj.createIter([999, 877, 122]);
console.log("gen obj method ", genObjMethods.next());
console.log("gen obj method ", genObjMethods.next());
console.log("gen obj method ", genObjMethods.next());
console.log("gen obj method ", genObjMethods.next());


let obj1 = {
    *createIter(items) {
        for(let i=0; i <items.length; i ++ ) {
            yield items[i];
        } 
    }

}

let genObjMethods1 = obj.createIter([999, 877, 122]);
console.log("gen obj method ", genObjMethods1.next());
console.log("gen obj method ", genObjMethods1.next());
console.log("gen obj method ", genObjMethods1.next());
console.log("gen obj method ", genObjMethods1.next());



//===Iterables and for of loop  =====

//The well-known @@iterator symbol specifies a function that returns an iterator for the given object.

let arrval = [12,23,34,45];

for (let num of arrval) {
    console.log("for of loop", num)
}

//we can use the for of loop only on iterables - arrays /maps/ sets/ string in ECMA6 are iterables


// Default iterator

let val = [1,2,3];
let iter = val[Symbol.iterator]();


console.log("Default iterator ", iter.next());
console.log("Default iterator ", iter.next());
console.log("Default iterator ", iter.next());
console.log("Default iterator ", iter.next());



//how to find whether collections are iterable ?


function isIterable(obj) {
    return typeof obj[Symbol.iterator] === "function";
    
}

console.log("isIterable array?", isIterable([1,2])); // checking array
console.log("isIterable set?", isIterable(new Set([1,2,2]))); // checking set
console.log("isIterable map?", isIterable(new Map())); // checking map
console.log("isIterable string?", isIterable("hola")); // checking string
console.log("isIterable weakset?", isIterable(new WeakSet())); // checking set
console.log("isIterable weakmap?", isIterable(new WeakMap())); // checking map

//creating Iterables
let collection = {
 items: [],
    *[Symbol.iterator]() {
        for(let item of this.items) {
            yield item;
        }
    }   
}

collection.items.push(5);
collection.items.push(50);


for (let x of collection) {
    console.log("dev defined iterables", x);
}




//collection Iterators - entries() values() keys()

let arrIterator = ["mac", "windows", "macncheese"];
let setIterator = new Set ([1234, 1234,5678]);
let mapIterator = new Map ();

mapIterator.set("city", "san jose");
mapIterator.set("airport", "SJC");

//entries
for (let entry of arrIterator.entries()) {
    console.log("array iterators entries", entry);
}

for (let entry of setIterator.entries()) {
    console.log("set iterators entries", entry);
}

for (let entry of mapIterator.entries()) {
    console.log("map iterators entries", entry);
}

//values
for (let entry of setIterator.values()) {
    console.log("set iterators values", entry);
}

for (let entry of mapIterator.values()) {
    console.log("map iterators values", entry);
}   

//keys
for (let entry of arrIterator.keys()) {
    console.log("array iterators keys", entry);
}

for (let entry of setIterator.keys()) {
    console.log("set iterators keys", entry);
}

for (let entry of mapIterator.keys()) {
    console.log("map iterators keys", entry);
}


//passing arguments to iterators

function *argumentsIterators() {
    let first = yield 1;
    let second = yield first + 2;
    yield second + 3;

}

let argIterate = argumentsIterators();
console.log("arguments to iterators", argIterate.next());
console.log("arguments to iterators", argIterate.next(10));
console.log("arguments to iterators", argIterate.next(18));

//generator return statement
function *createReturnIterator() {
    yield 1;
    return;
    yield 2;
    yield 3;
}

let returnIterator = createReturnIterator();

console.log(returnIterator.next());           
console.log(returnIterator.next());   









