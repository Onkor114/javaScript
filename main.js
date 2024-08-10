// var city = 'jigjiga';

// let name = 'Sonkor'
// const age = '50'
// console.log(age);

// let greeting = "asalamu alaikum";
// console.log(greeting);

// let year= 2024;
// console.log(year);

// let isAdult =true;
// console.log(isAdult);

// let A = 10;
// let B = 10;

// console.log(A+B);
// console.log(A-B);
// console.log(A*B);
// console.log(A/B);



// console.log(A%B);
// console.log(A++);
// console.log(A);
// console.log(A--);
// console.log(++A);
// console.log(--A);
// console.log(--B);


// let x = 7;
// let y = 3;

// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y);
// console.log(++x);
// console.log(++y);
// console.log(x++);
// console.log(y--);


// let A = 15;

// let B = "15";

// console.log(A==B);
// console.log(A!=B);
// console.log(A===B);
// console.log(A!==B);
// console.log(A>B);
// console.log(A>=B);
// console.log(A<B);
// console.log(A<=B);


// LOGICAL OPERATORS

// let isSunny = true;

// let isWeekend = false;

// console.log(isSunny && isWeekend);

// console.log(isSunny|| isWeekend);
// console.log(!isSunny);
// console.log(!isWeekend)

// String OPERATORS

// let firstName = " Abdinour";
// let lastName = " muktar";

// // console.log(firstName +  lastName);
// // console.log(lastName);

// let greeting = "Hello";

// greeting += firstName;
// greeting += lastName;

// greeting += " good morning";

// console.log(greeting);



//##Function declaration

// function great(name){
//   console.log("Hello " + name);

// }
// great("Abdinour");
// great("Sonkor");
// great("Abd");


// function calculateTotal(price,quantity){
//   console.log("Total price:  $" +price * quantity);
// }
// calculateTotal(2,10);
// calculateTotal(5,50);
// calculateTotal(3,6);

//#RETURN FUNCTION
// function add(a,b){
//   // console.log(a+b);
//   return a+b;
// }
// // console.log(add(10,30));

// let result = add(10,30)
// console.log(result /2);
// console.log(result * 2)

//#function expretion

// const greet = function(name){
//   console.log("hello " + name);
// }
// greet("abdinour");

//#exercise #4
// function add(a,b){
//   return a+b;
// }
// let result = add(2,3);
// console.log(result *2);
// console.log(result *5);
// console.log(result *8);

// const add = function(a,b){
//   return a+b;
// }

// let result = add(2,3);
// console.log(result);

// const salaam = (name)=> {
//   console.log("hello " +name)
// }
// salaam("Abdinour")

//Exercise #5
// const add = (a,b)=> {
//   return a+b;
// }
// let result =add(2,3);
// console.log(result);

//# SCOPE
// let globalvariable = ("i am a global variable");

// function showVariable(){
//   console.log(globalvariable);
// }
// console.log(globalvariable)
// showVariable()


// function showVariable(){
//   let localvariable = ("i am local variable");
//   console.log(localvariable);
// }
// console.log(localvariable)
// showVariable()

//# BLOCK SCOPE FUNCTION
// {
  
//   let MyName = "Abdinour";
//   const age = 23;

 
//   console.log(MyName)

// }


//# arrays

// let names = ["Abdinour", "fuad", "Sonkor", "Ali"] 
// console.log(names[0])

//exercie #6
// let colors = ["red", "blue", "green", "grey", "white", "orange"]
// console.log("befor arrey");
// console.log(colors);

// colors.push("black");

// console.log("after push");
// console.log(colors);

// colors.pop();
// console.log("after pop");
// console.log(colors);

// colors.unshift("lemon");
// console.log("after unshift");
// console.log(colors);

// colors.shift();
// console.log("after shift");
// console.log(colors);

// console.log(colors.length);


//# Objects

// let person = {
//   name : "abdinour",
//   age : 24,
//   city : "denan"
// }

// console.log(person.name);

// console.log(person["name"]);

// exercise #8

let car = {
  make : "toyota",
  modell : "tesla",
  year : 2024
}

console.log(car);

car.make = "haudai";

console.log(car)

car.user = "Abdinour";

console.log(car)






