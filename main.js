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

/////////////////////////////////////////// String OPERATORS

// let firstName = " Abdinour";
// let lastName = " muktar";

// // console.log(firstName +  lastName);
// // console.log(lastName);

// let greeting = "Hello";

// greeting += firstName;
// greeting += lastName;

// greeting += " good morning";

// console.log(greeting);



///////////////////////////////////////////////##Function declaration

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

// let car = {
//   make : "toyota",
//   modell : "tesla",
//   year : 2024,

//   //if you use arrow function
//   great : function () {
//     console.log("Hello, How are your Doing" , this.make);
//   }
// }

// console.log(car);

// car.make = "haudai";

// console.log(car)

// car.user = "Abdinour";

// console.log(car)

// car.id = "EV/1095/13";

// console.log(car);

// console.log(car.great());

// let studentsI = ["Abdinour", "Ali", "saynab"]
// let students = [
//   {
//     Name: "Abdinour",
//     Age: 23,
//     city: "jigjiga"
//   },

//   {
//     Name: "Geedi",
//     Age: 23,
//     city: "Mugadisho"
//   }
// ]

// console.log(students[0].Name);

// let liberary = [
//   {
//     title: "Looma ooyaan",
//     Author: "frunk Fanoon",
//     Year: 1960
//   },
//   {
//     title: "Ismalure",
//     Author: "mark manson",
//     Year: 2021
//   }
// ]

// console.log(liberary[0] .title)

// for (let i = 0; i < 5; i++){
//  console.log(i);
// }

// for(let i = 1; i <=10; i++){
//   console.log(i);
// }

//EXERCISE 11

// for (let i = 1; i <=50; i++){
//   console.log(i);
  
// }

// const classStudents =[ "abdinour", "Ali" ,"Ahmed", "muhsin"]

//   console.log(classStudents.length)
// for (let i = 0; i < classStudents.length; i++){


//     console.log(classStudents[i])

// }


// const fruat = ["Apple", "banana", "lemon", "chery"]

// for (let i =0; i < fruat.length; i++){
//   console.log(fruat[i])
// }

// let i =0;
// while ( i <5){
//   console.log("iteration number:" +i)
//   i++;
// }

// let i = 5;
// while ( i>0){
//   console.log("Iteration Number: " +i)
//   i--;
// }

// let i = 0;
// do {
// console.log("iteration number: " +i)
// i++;
// }while(i < 5);

// let password;
// do {
//   password = prompt("Enter your password");
// }
// while(password !== "12345");
// console.log("welcome user");

// let user;
// do{
//   user = prompt("enter number greater then 10");
// }while(user == "11,12,.....");

// console.log("great job")
// let number;

// do {
//     number = parseInt(prompt("Please enter a number greater than 10:"));
// } while (isNaN(number) || number <= 10);

// alert("Thank you! You entered: " + number);

// const students = ["Abdinour", "Ali", "Ahmed"];

// for (student of students){
//   console.log(student);
// }

// const language = "JavaScript"

// for (let l of language){
//   console.log(l);
// }

// const student = {name: "abdinour", ID: "CA12", age: 25};

// for(key in student){
//   console.log(student[key]);
// }

// const people = [
//   {Name: "Abdinour", Age: 25, Citty:"jigjiga"},
//   {Name: "Ahmed", Age: 45, Citty:"godey"},
//   {Name: "Ali", Age: 25, Citty:"Dhegahbur"}
// ]
// for( const person in people){
//   console.log(people[person]);
// }



//###CONDITIONAL STATEMENTS LESSON/////////////////////////////////////////////////////////////////////
//if -statement
// let age = 18;

// if(age >= 18){
//   console.log("you are adult")
// }


//# if -else statement///////////////////

// let age = 10;
// if (age >= 18){
//   console.log("you are adult");
// } else {
//   console.log("you are a minor");
// }


//##Exercise #16

// let score = 40;
// if(score >= 50){
//   console.log("you passed");
// }else{
//   console.log("you failed");
// }


// let age = 15;
// if(age < 13){
//   console.log("you are a child");
// } else if (age < 20){
//   console.log("your are a teeneger");
// }else{
//   console.log("your are an adult");
// }

//##Exercise #17
// let tempreture = 20;
// if (tempreture <0){
//   console.log("it is verry cold");
// }else if (tempreture >0 && tempreture <15){
//   console.log("is cold");
// }else if (tempreture >15 && tempreture < 25){
//   console.log("is warm");
// }else{
//   console.log("is hot")
// }


///////////////////## Ternary operator/////////////////////

// let age = 18;

// const message = age >=18 ? "Your are an adult" : "your are a minor";
// console.log(message);
 
// let me = age >= 18 && "Your are an adult";
// console.log(me);

//##Exercise #18

// let grade = 55;

// const me = grade >= 60 ? "you are passed" : "your are failed";
// console.log(me)


///////////////## Higher-Order methonds
///////////ForEach

// const fruits = ["apple", "banana", "chery"];

// fruits.forEach ((fruit)=>{
//   console.log("i like " + fruit);
// }
// )

// console.log("-------------")

// fruits.forEach (function(fruit){
//   console.log("i like " + fruit);
// }
// )


//////////////////////tijabo/


/////////////////////////////#Exercise #19

// const number = [1, 2, 3, 4, 5,];

// number.forEach(function(number){
//   console.log(number);

// })

// const numbers = [1, 2, 3, 4, 5];

// const newNumber = numbers.map((number)=> number *2)
//   console.log(newNumber)

/////////////////////////////////#exercise #20/////////////////////////amazing

// const fruit = ["apple", "banana", "chery"]

// const newFruits = fruit.map((fruit)=> fruit.length)

// console.log(newFruits)


////////////////////////////////////////filter method: is used to filter arrey

// const num = [1, 2, 3, 4, 5, 6];

// const evenNumber = num.filter((number)=> number % 2 === 0)
// console.log(evenNumber)

// const scores = [40, 60, 50, 70, 80, 90];

// const pass = scores.filter((score) => score >=60);
// console.log(pass);

// const numbers = [1,2,3,4];
// const sum = numbers.reduce((total, num)=> total + num ,0);
// console.log(sum)

//////////////////////////////////// exercise #21

// const numbers = [1,2,3,4,5];
// const product = numbers.reduce((products, num)=> products * num,1);
// console.log(product);


////////////////////////////////ES6 BASICS

// const name = "Abdinour";
// const city = "Jigjiga";
// const message = `hello ${name} welcome to ${city}`
// console.log(message);



/////////////////////////////////Arrey Distructure///////////

// const fruits = ["banana", "chery", "apple"];

// const [first, chery, apple] = fruits;

// console.log(first);
// console.log(apple);


////////////////////object distructure//////////////

// const person =  { Name: "Abdinour", Age: 25, city: "jigjiga" }
// const {Name, Age, city} = person;

// console.log(Name);
// console.log(Age);
// console.log(city);

///////////////////////////EXERCISE #23

// const car = {Make: "toyota", model: "corola", Year: 2020, }

// const {Make, model} = car;

// console.log(Make);
// console.log(model);

////////////////////Default prametres

// function greet  (name= "guest"){
//   console.log(`Hello ${name}`)
// }

// greet("Abdinour");

// function calculateArea(width, height){
//   console.log (`Area: ` + width * height);
// }
// calculateArea(5 , 8);


////////////////////////////// spread operators

// const numbers = [1,2,3];

// const allNumbers =[...numbers , 4,5,6,7];

// console.log(allNumbers);


////////////////////////////////////// rest operators

// function sum (...numbers){
//   return numbers.reduce((total, num) => total + num,0);
// }
// console.log(sum(20,30,50,100))

/////////////////////////////exercise #25

// const number = [1,2,3];
// const moreNumbers = [...number, 4,5,6];

// console.log(moreNumbers);

// function all (...product){
//   return product.reduce((total , num) => total * num,1);

// }
// console.log(all(3,2));


///////////////////////////////////////Asynchronous////////////////////////////////////////


//////////////synchronous

// function fetChUserDatasync(){
//   alert("Fetching user data"); // blocks the data until the user chlivk "OK"
//   return{ id: 1, name: "Abdiniur"};
// }

// console.log("starting fetching user data...");
// const user = fetChUserDatasync(); //this blocks the rest of the code
// console.log("user data", user);
// console.log("This message is blocked untill user data is fetched.");

//////////////Asynchronous
function getUserData(callback){
  setTimeout(()=>{
    const user = {id: 1, name: "John Smith" }
    callback(user);
  }, 3000);
}

console.log("starting to fetch user data");

getUserData(function(user){
  console.log(user)
});
console.log("This message shows up imediately");
