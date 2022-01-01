import { compose, pipe } from 'lodash/fp';

function sayHello() {
    return "Hello World";
}
//assign to a variable
let fn = sayHello;

//pass as an argument
function greet(fnMessage) {
    console.log(fnMessage());
}

greet(fn);

//return from other function
function sayHello2() {
    return function () {
        return "test";
    }
}

let fn2 = sayHello2();
let message = fn2();
console.log(message);

//great an sayHello2 are higher order functions ( input/retrun a function)
//for example "map" or "setTimeout" are higher order functions because they take a function as argument

/*************************composing and piping ********************/
let input = "   JavaScript   ";
let output = "<div>" + input.trim() + "</div";

const trim = str => str.trim();
const wrap = type => str => `<${type}>${str}</${type}>`;     //currying
const toLowerCase = str => str.toLowerCase();

const transfrom = pipe(trim, toLowerCase, wrap("div"));
console.log(transfrom(input));

/*********************Pure functions > immutability > update object ************/
const person = {
    name: "Amin",
    address: {
        city: "Gorgan",
        country: "Iran"
    }
};
const updatedObject = {
    ...person,
    address: {
        ...person.address,
        city: "Tehran"
    },
    name: "Jack"
};
console.log(person, updatedObject);
/*********************Pure functions > immutability > update array ************/
const numbers = [1, 2, 3];
//Adding
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
//Removing
const removed = numbers.filter(n => n !== 2);
//Updating
const updated = numbers.map(n => (n === 2 ? 20 : n)); //if we have array of objects: map(n=>{...n,number=20})

console.log(added, removed, updated);

/*********************Pure functions - immutability by immer library ************/
import { produce } from "immer";

let book = { title: "Harry Potter" };

function publish(book) {
    return produce(book, draftBook => {
        draftBook.isPublished = true;
    });
}

let updatedBook = publish(book);

console.log(book);
console.log(updatedBook);