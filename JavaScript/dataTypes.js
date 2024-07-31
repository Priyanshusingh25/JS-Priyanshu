"use strict"; //preserving older code, code is treated as newer version

// alert("hello"); (node.js => Browser)
console.log(3+3) 
console.log("priyanshu")  //code on next line, as readability is preffered 

let name="priyanshu"
let age="18"
let isLoggedIn= false
let state = null // shows emptiness , type is object

          // primitive datatypes (is Call by value)
// number => 2 to the power 53
//bigInt
//string => ""
//boolean => true or false
//null -- standalone value type
//undefined
//symbol -- for uniqueness

console.log(typeof age);


//------------------non-primitive (reference type)---------------------//

// Array
// Objects
// Functions

// const age= 100
// const minAge = 90
// let isLoggedIn = false
const outsideTemp = null
// let userEmail;

const id = Symbol('234')
const anotherId = Symbol('234')

// console.log(id === anotherId);

let bigNumber = 312344231321n
// console.log(typeof bigNumber);

const heros = ["hulk" , "vision" , "messi"]

let Obj = {
    name:"vision",
    age:100,
    writing: "right-handed",
}

const myFunction = function(){ // type is function/function-object
    console.log("hello world");
}

console.log(typeof outsideTemp);


//++++++++++++++++++++ memory

// stack --primitive and ,  heap memory --non-primitive

let myDesign = "static"
let sameDesign = myDesign
sameDesign = "dynamic"

console.log(myDesign);
console.log(sameDesign);

let userOne = {
    email: "ad@gmail.com",
    age : 10
}

let userTwo = userOne
userTwo.email = "addaio@gmail.com"

console.log(userOne);
console.log(userTwo);

// {
//     email: "as@gmail.com",
//     age:12
// }