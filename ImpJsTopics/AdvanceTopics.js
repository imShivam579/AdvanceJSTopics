//? Must Know 12 Topic's in JavaScript for best 👍🏼

//? 1.Regular Expression (RegExp).
//! JavaScript RegExp objects are stateful when they have the global or sticky flags set (e.g. /foo/g/or foo/y).
//* List of flags we can use in RegExp
//* 'g' => matches the pattern multiple times.
//* 'i' => makes the regex case insensitive.
//* 'm' => enables multi-line mode.
//* 'u' => enables support for unicode.
//* 's' => short for single line , it causes the . to also match new line character.

/////////////////////////////////////////////////

//* All type of ex of all Regex methods:

// [abc] => a,b,c
// [^abc] => any character except a,b,c
// [a-z] => any character between small a-z
// [A-Z] => ![a-z]
// [a-zA-Z] => a to z or A to Z
// [0-9] => 0 to 9
// [ ] => occurs 0 or 1 time
// [ ]+ => occurs 1 or more time
// [ ]* => occurs 0 or more time
// [ ]{n} => occurs n time
// [ ]{n,} => occurs n or more time 0
// [ ]{ y,z} => occurs atleast "y" time but less than "z" time

//* RegEx quantifiers
//* RegEx metacharacters

// \d => [0-9]
// \D => [^0-9]
// \w => [a-zA-Z_0-9]
// \W => [^\w]

//* "\" known as escape character used to search for the special character like '.' '-' '^' '+' which character are used in default conmands.
//* "\"  => tells computer to treat the following character as search character for '+' '.'

//* Examples:
//* Mobile Number => start with the number 8 or 9 and total digit should be 10;
// /[89][0-9]{9}/

//* Examples:
//* UserName => first character should be uppercase, contains lower case alphabets , only one digit allowed in between.
// /[A-Z][a-z]*[0-9]*[a-z]/

//* Examples:
//* Email Id => ex: Shiv123@gmail.com
// /[a-zA-Z0-9\-\.\_]+[@][a-z]+[\.]+[a-z]{2,3}/
/////////////////////////////////////////////////

// ? .exec() method.
//* The .exexc() method executes a search for a match in a specified string. Returns a result  array or null.
// let reg = /shivam/g;
// let s = "I had a nice meeting with shivam";
// console.log(reg.exec(s)); //! return an array.

///////////////////////////////////////////////

//? .test()method
//* The test() method tests for a match in a string. This method returns true if it finds a match , otherwise it return false.
// let reg = /shivam/g;
// let s = "this is a great code with shivam and dev shivam";
// console.log(reg.test(s)); //! returns true (true or flase).

//////////////////////////////////////////////////

//? .match() method
//* The match() method searches a string for a match against a regular experession, and returns the matches, as an Array objects.. This method returns null if no match is found.
// let reg = /shivam/g;
// let s = "this is a great code with shivam and dev shivam";
// console.log(s.match(reg)); //! returns no. of match found in fucntion.

////////////////////////////////////////////////////

//? .search() method
//* The search() method searches a string for a specified value and returns the position of the match. The search value can be string or a RegExp. This method returns -1 if no match is found.
// let reg = /shivam/g;
// let s = "this is a great code with Shivam and dev shivam";
// console.log(s.search(reg)); //! returns indexNo. of first match in function/array.

/////////////////////////////////////////////////////////////

//? .replace() method
//* The replace() method searches a string for a speccified value, or a regular expression, and returns a new string where the specified value(and not a RegExp), only the first instance of the value wil be replaced.
// let reg = /shivam/g;
// let s = "this is a great code with shivam and dev shivam";
// console.log(s.replace(reg, "Shiva")); //! returns new replaced string with all the replacement (if global flag is given , otherwise replaces the first  match).

///////////////////////////////////////////////////////////////

//Ex: Match a literal string with different possibilities.

// let s = "shivam means I have a dog,cat,fish and rat";
// let reg = /dog|cat|fish/g;
// console.log(s.match(reg)); //! returned array of matched result/value.
// console.log(s.search(reg)); //! returned IndexNo. of first match.
// console.log(reg.test(s)); //! returned boolen value.
// console.log(reg.exec(s)); //! returned array of all(match,index.no,string)

/////////////////////////////////////////////////////////////////

//Ex: Match anything with wildcard period.

// let humstr = "I'll hum a song. ";
// let reg = /hu./;
// console.log(humstr.match(reg)); //! returned array of matched result/value.
// console.log(humstr.search(reg)); //! returned IndexNo. of first match.
// console.log(reg.test(humstr)); //! returned boolen value.
// console.log(reg.exec(humstr)); //! returned array of all(match,index.no,string)

// let humstr = "I'll hum a song. ";
// let reg = /.um/;
// console.log(humstr.match(reg)); //! returned array of matched result/value.
// console.log(humstr.search(reg)); //! returned IndexNo. of first match.
// console.log(reg.test(humstr)); //! returned boolen value.
// console.log(reg.exec(humstr)); //! returned array of all(match,index.no,string)

//////////////////////////////////////////////////////////////

// Ex: Match single character with multiple possiblities.

// let reg = /b[aiv]g/;
// let s = "there is big bug in the site";
// console.log(s.match(reg)); //! returned array of matched result/value.
// console.log(s.search(reg)); //! returned IndexNo. of first match.
// console.log(reg.test(s)); //! returned boolen value.
// console.log(reg.exec(s)); //! returned array of all(match,index.no,string)

// let humstr = "there is big bug in the site";
// let reg = /[aeiou]/gi;
// console.log(humstr.match(reg)); //! returned array of matched result/value.
// console.log(humstr.search(reg)); //! returned IndexNo. of first match.
// console.log(reg.test(humstr)); //! returned boolen value.
// console.log(reg.exec(humstr)); //! returned array of all(match,index.no,string)

///////////////////////////////////////////////////////////////////

//Ex: Match single character not specified.

// let humstr = "there is big bug in the site";
// let reg = /[^0-9aeiou]/gi;
// console.log(humstr.match(reg)); //! returned array of matched result/value.
// console.log(humstr.search(reg)); //! returned IndexNo. of first match.
// console.log(reg.test(humstr)); //! returned boolen value.
// console.log(reg.exec(humstr)); //! returned array of all(match,index.no,string)

////////////////////////////////////////////////////////////////////

//Ex: Match characters that occur zero or more times.

// let s1 = "goooooooooal";
// let s2 = "good game";
// let s3 = "over the moon";
// let reg = /go*/gi;
// console.log(s1.match(reg)); //! returned array of matched result/value.
// console.log(s2.match(reg)); //! returned array of matched result/value.
// console.log(s3.match(reg)); //! returned null.

/////////////////////////////////////////////////////////////////////

//Ex: Find character with lazy matching.

// let s = "titanic";
// let s2 = "<h1> season is comming </h1>";
// let regx = /t[a-z]*?i/;
// let regx2 = /<.*>/;
// let regx3 = /<.*?>/;
// console.log(s.match(regx)); //! return ['ti']
// console.log(s2.match(regx2)); //! return ['<h1> season is comming </h1>']
// console.log(s2.match(regx3)); //! return ['<h1>']

//////////////////////////////////////////////////////////////////////

//Ex:

// let s = "the five boxing wizard jumps quickly.";
// let s1 = "Your sandwich will be $40.00";
// let reg = /\w/g; //* match all letters and numbers.
// let regx = /\W/g; //* match everything but not numbers and letters.
// let regy = /\d/g; //* match all numbers.
// let regz = /\D/g; //* match all non-numbers.
// let rega = /\s/g; //* match all whitespace.
// let regb = /\S/g; //* match all non-whitespace.
// console.log(s.match(reg));
// console.log(s.match(regx));
// console.log(s1.match(regy));
// console.log(s1.match(regz));
// console.log(s1.match(rega));
// console.log(s1.match(regb));

////////////////////////////////////////////////////////////////////////

//Ex: Specify only the lower number of matches

// let s = "hazzzzzah";
// let reg = /z{3,}/;
// console.log(s.match(reg));

//Ex: use capture group to search and replace.
// let s2 = "the sky is silver";
// let regx = /silver/gi;
// console.log(s2);
// console.log(s2.replace(regx, "blue"));

//* ------------------------------------------------x-x-----------------------------------------------------------------//

//? 2.Callback's().

//* Any function that is passed as an argument is called as callback function.
//* A callback function is a function that is to be executed after another function has finished executing - hence the name 'callback'.

//? Synchronous JavaScript.
//* Synchronous => happens at the same time.

//! JavaScript is by default synchronous.
//! JavaScript is a single-thereaded programming language which means only one thing can happen at a time.
//*This means that before the code executes, var and function declarations are "hoisted" to the top of thier scope.
//* in syncronus method next code does not execute untill first code execution does not finished.
//* synchronous code is executed in sequene => each statement waits for the previous statement to finish before executing.

////////////////////////////////////////////////////////////

//? Asynchronous JavaScript(such as callbacks , promises,and async/await).
//* Asynchronous => dosen't happens at the same time/not simuntaneous or concurrent in time.
//* You can perform long network requests without blocking the main thread.
//* in Asyncronus method if any function next code does not execute untill first code execution does not finished.
//* Asyncronus

//Ex:1

//In sync format.
// function otherFunction() {
//   console.log("we are another function");
//   console.log("do some stuff");
// }
// console.log("start");
// otherFunction();
// console.log("end");

// In async format.

// function otherfunction() {
//   console.log("we are in another function");
//   console.log("do some more stuff");
// }
// console.log("start");
// setTimeout(() => {
//   otherfunction();
// }, 3000);
// console.log("end");

//Ex:
// const posts = [
//   { title: "postOne", body: "this is post one" },
//   { title: "postTwo", body: "this is post two" },
// ];
// function getposts() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post, index) => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }
// function createpost(post, index) {
//   setTimeout(() => {
//     post.push(post);
//     callback();
//   }, 2000);
// }
// createpost({ title: "post three", body: "this is post three" }, getposts); //! calling funciton in another function.

// Ex:2
// console.log("start");
// function loginUser(Email, password) {
//   return new Promise((accept, reject) => {
//     setTimeout(() => {
//       console.log("now we have data");
//       accept({ userEmail: Email });
//     }, 3000);
//   });
// }
// function getuserVideos(Email) {
//   return new Promise((accept, reject) => {
//     setTimeout(() => {
//       accept(["video", "video2", "video3"]);
//     }, 2000);
//   });
// }
// function videodetail(video) {
//   return new Promise((accept, reject) => {
//     setTimeout(() => {
//       accept("title of video");
//     }, 2000);
//   });
// }
// loginUser("email79@gmail.com", "password123")
//   .then((user) => getuserVideos(user.Email))
//   .then((video) => videodetail(video[0]))
//   .then((detail) => console.log(detail));
// console.log("end");
//* ------------------------------------------------x-x-----------------------------------------------------------------//

//? 3.Promises.

//* A promise is an object representing the eventual completion or faliure of an asynchronous operation. A J.S promise object contains both the "producing code" and calls to the "consuming code". It can be used to deal with Asynchronous operations in J.S
//* Three states of promise:-
//* 1.Pending => Initial state, Not yet fullfilled or rejected.
//* 2.FullFilled => Promise completed.
//* 3.Rejected => Promise failed.

//Ex:
// const sample = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("getting stuff form youtube");
//   }, 2000);
// });
// const fb = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log({ user: "name" });
//   }, 3000);
// });
// Promise.all([sample, fb]).then((result) => console.log(result)); //! this will not execute until both values(sample,fb) is not satisfied.

//? How promise works ?

//* promise(pending state) ---Resolved--->.then()||.finally() ----returned--->promise(pending state).

//* promise(pending state) ---rejected--->.catch()||.then()||.finally() ----returned--->promise(pending state).

//* A pending promise can either be resolved with a value or reject with a error(reson).
//* when either of these options happens(resolve\rejected) , the associated handlers queued up by a promise .then() method is called.
//* A promise is said to be settled if it is either Resolved/ or Reject , but not pending.

//? Creating Promise

//* Promise() => a promise object is created using the 'new' keyword and its constructor.
//* i.e. new Promise()
//* This constructor takes a function, called the 'executor function', as its parameter.
//* i.e. new ---constructor()--- ex: new Promise();
//* This function should take two function as paramneter.
//* i.e. new Promise(executor function 1,executor function 2) ex: new Promise ((resolve,reject) =>{})
//* (resolve): is called when the asynchronous task completes successfully and returns the result of the task as a value.
//* (reject): is called when the task fails, and return the reason for failure, which is typically an error object.
//*                  fun1() , fun2()
//* ex: new Promise((resolve,reject))
//*                  --two parameter--
//*                  ---( executor )---

//? Producing code:
//* A javascript promise object contains both(resolve,reject) producing code, and calls to the consuming code.

// const obj = new Promise((resolve,reject)=>{ -|
//   --- Do asynchronous Operation --          |
// resolve(value);                             } Production code
// reject (error)                             |
// }) ---------------------------------------|

//? consuming code:
// Promise obj.then(value => { --|
//   console.log(value);         |
// },                            }consuming code .
// error =>{                     |
//   console.log(error);         |
// });

//? function returning a promise:
//Ex:
// function myfunction() {
//   return new Promise((resolve, reject) => {
//     resolve("resolved");
//     reject("rejected");
//   });
// }
// getting promise.
// myfunction().then((resolve) => console.log(resolve));

//? .then() method:
// The then() method returns a promise. it takes upto two arguments: callback function for the success and failure case of the promise. As then() method returns a promise so we can do method chaining.
//* Syntax: .then(onResolved,onReject)
//* (onResolved): A function called if the promise is fullfilled . This function has one argument, the fulfillment value.
//* (onReject): A function called if the promise is rejected.
//Ex:
// Promise obj.then(value => {
//   console.log(value);
// },
// error =>{
//   console.log(error);
// });

//* we can write code with both method:
//* method 1:
// const obj = new Promise((resolve,reject)=>{ -|
//   --- Do asynchronous Operation --          |
// resolve('Request accepted') ;                } Production code
// reject ("request rejected")                |
// }) ---------------------------------------|

// Promise obj.then(value => { --|
//   console.log(value);         |
// },                             }consuming code .
// error =>{                     |
//   console.log(error);         |
// });---------------------------|

//* method 2:
// const obj = new Promise((resolve, reject) => {
//   let req = true;
//   if (req == true) {
//     resolve("accepted");
//   } else {
//     reject("declined");
//   }
// }).then(
//   (value) => console.log(value),
//   (error) => console.log(error)
// );

//? chaining promises
//* the .then() method returns a promise which allows for method chaining. If the the function() passed as handler to .then(), returns a promise , an equivalent promise will be exposed to the subsequent .then() in the method chaining.
//Ex:
// const obj = new Promise((resolve, reject) => {
//   let num = 10;
//   console.log(num);
//   resolve(num);
// })
//   .then((value) => {
//     console.log(value);
//     return value + 10;
//   })
//   .then((value) => console.log(value));

//? .Catch() method
//* The catch() method returns a promise and deals with rejected cases only. It behaves the same as calling .then(value,reject)In fact, calling (reject) internally calls .then() method.
//* the .catch() method is used for error handling in promise composition. Since it returns a promise, it can be chained in somde way as its sister method .then()
//* Syntax: catch(callback)
//* where the callback is function called when the promise is rejected, This function has one argument error - The rejection error

//Ex:
// const promiseObj = new Promise((value, reject) => {
//   let req = true;
//   if (req == true) {
//     value("accepted");
//   } else {
//     reject("rejected");
//   }
// })
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

//? .finally() method
//* The finally() method returns a promise, when the promise is setteled i.e. either fullfilled or rejected, the specified callbacks function is executed. This provides a way for code to be run whether the promise was fullfilled successfully or rejected once the promise has been dealt with.
//* syntax: finally(callback)

//Ex:1
// const obj = new Promise((resolve, reject) => {
//   let req = false;
//   if (req == true) {
//     resolve("accepted");
//   } else {
//     reject("rejected");
//   }
// })
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("completed"));

//////////////////////////////////////////////////////////

//Ex:2
// const Obj = new Promise((resolve, reject) => {
//   let num = 10;
//   resolve(num);
// })
//   .then((value) => {
//     console.log(value);
//     return value + 10;
//   })
//   .then((value) => {
//     console.log(value);
//     return value + 10;
//   })
//   .then((value) => {
//     console.log(value);
//     () => new Error("error found");
//   })
//   .catch((error) => console.log(error));

////////////////////////////////////////////////////////

//Ex:3
// console.log("start");
// function getName(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Inside name section");
//     }, 2000);
//   });
// }
// function getHobbies(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("inside hobby section");
//     }, 1000);
//   });
// }
// getName("shiv")
//   .then((name) => getHobbies(name))
//   .then((hobby) => console.log(hobby));
// console.log("end");
//* ------------------------------------------------x-x-----------------------------------------------------------------//

//? 4.AsyncAwait
//* This keyword is used to turn a function declaration to asyn fucntion.
//* Asyc Function: as async function is a function declared with the async keyword.As async function is a function that knows how to expect the possibility of the await keyword being used to invoke async code. It returns promise.
//* Await: the await operator is used to wait for a promise. It can only be used inside an asyn function with in regular javascript code. Await can be put in front of any async promise - based function to pause your code on that line until the promise fullfill the result value.

//* Async Function:
// async fucntion name (params) {}

//* Async function expression:
//let name = async function(){}

//* Async arrow fucntion:
// let name = async() =>{}

//Ex:
// function getName(name) {
//   return new Promise((value, error) => {
//     value(name);
//   });
// }
// function getHobbies(name) {
//   return new Promise((value, error) => {
//     const hobbies = ["cricket", "boxing", "gamming", "reading", "running"];
//     console.log(hobbies);
//   });
// }
// async function showHobby() {
//   try {
//     const nm = await getName('shivam');
//     const hobby = await getHobbies(nm);
//     console.log(hobby);
//   } catch {
//     console.log("could not found hobbies");
//   }
// }
// showHobby();
//* ------------------------------------------------x-x-----------------------------------------------------------------//

//? 5.Prototype in J.S

//! ES6 classes are more used ofthen then the Prototype inheritnace because of it's complicated format;
//* Syntax:  Classname.prototype.key(name) = 'value';
// Ex:1
// var mobile = function (model_name, model_no) {
//   //  properties written inside is called as 'Instance Member'
//   this.model_name = model_name;
//   this.model_no = model_no;
//   this.price = 3000;
// };
// var samsung = new mobile("Galaxy", "wbc100");
// var nokia = new mobile("nokia", "3310");
// mobile.prototype.colour = "white"; //  properties written using prototype are 'Prototype Member'
// console.log(samsung);
// console.log(nokia);
///////////////////////////////////////////////////////////////
//Ex:2
// const proto = {
//   slogan: function () {
//     return `This company is best `;
//   },
//   changeName: function (newName) {
//     this.name = newName;
//   },
// };

// const shivam = Object.create(proto);
// shivam.name = "shiva";
// shivam.slogan = `This company is best ever`;
// shivam.role = "programmer";
// // shivam.changeName = "shivam";
// console.log(shivam);

/////////////////////////////////////////////////////////////////
//Ex: 3
// const shiv = {
//   name: "shivam",
//   role: "programmer",
// };
// //Employee constructor
// function Employee(name, salary, experience) {
//   this.name = name;
//   this.salary = salary;
//   this.experience = experience;
// }
// // add slogan using prototype
// Employee.prototype.slogan = function () {
//   return `${this.name} is trying to learn prototype in more depth`;
// };
// let shivObj = new Employee("shiva", 400000, 2);
// console.log(shivObj);
// console.log(shivObj.slogan());
// //Inherit programmer with employee
// function programmer(name, salary, experience, language) {
//   //* "this" is used to donate that using these properties  for this function only.
//   Employee.call(this, name, salary, experience);
//   this.language = language;
// }
// // Inherit the prototype from employee
// programmer.prototype = Object.create(Employee.prototype);
// // Manullay set the constructor
// programmer.prototype.constructor = programmer;
// let rohan = new programmer("rohan", 2, 0, "javascript");
// console.log(rohan);

//* ------------------------------------------------x-x-----------------------------------------------------------------//

//? 6.Inheritance.

//Ex:1
//* The extned key is used in class declarations or class experessions to create which is a child of another class.
//* The extend keyword can be used to subclass custom classes as well as built-in objects.
// class father {
//   fatherMoney() {
//     return "father's money";
//   }
// }
// class son extends father {
//   sonMoney() {
//     return "son's money";
//   }
// }
// class grandSon extends son {
//   grandSonMoney() {
//     return " grandSonMoney";
//   }
// }
// var gSon = new grandSon();
// console.log(gSon.grandSonMoney());
// console.log(gSon.sonMoney());
// console.log(gSon.fatherMoney());
// //!return:
// // grandSonMoney
// // son's money
// // father's money
// ///////////////////////////////////////////////////////////////////////////////
// //Ex:2
// class employees {
//   constructor(givenName, givenExperience, learnedLanguage) {
//     this.name = givenName;
//     this.exprience = givenExperience;
//     this.language = learnedLanguage;
//   }

//   slogan() {
//     return `I am ${this.name} and this is my company`;
//   }
//   joiningYear() {
//     return `joining year: ${2020 - this.exprience}`;
//   }
//   static multiply(a, b) {
//     return a * b;
//   }
// }
// class programmer extends employees {
//   constructor(givenName, givenExperience, learnedLanguage, githubId) {
//     super(givenName, givenExperience, learnedLanguage, githubId);
//     this.id = githubId;
//   }
//   favroutiLanguage() {
//     if (this.learnedLanguage == "javascript") {
//       return "javascript";
//     } else {
//       return "python";
//     }
//   }
// }
// rohan = new programmer("shivam", 3, "javascript", "gitid@234");
// console.log(rohan);
// console.log(employees.multiply(3, 8));
// console.log(rohan.language);
// console.log(rohan.id);
// console.log(rohan.joiningYear());

//*-----------------------------------------------xx------------------------------------------------------------//

//? 7.Closure's

//* closure is a function having access  to the parent scope. It preserve the data from inside.
//* A clousre is a inner function that has access to the outer (enclosing) function's variable.
//* For every closure we have three scopes:-
//* 1.Local scope(Own scope).
//* 2.Outer function scope.
//* 3.Global scope.
//Ex: 1
// var i = "global scope"; // GLobal scope
// function show() {
//   // Outer function
//   var j = "J is a local variable in outter function";
//   console.log(j);
//   function innerfun() {
//     // Innner function.
//     //* Inner function preserves the outer function data and access it, and it form as an clousre.
//     //* Inner function can also access Global variable(values).
//     var k = "K is a local variable in inner function";
//     console.log(i);
//     console.log(j);
//     console.log(k);
//   }
//   innerfun();
//   //* Outer function cannot access its inner/child function variable(values).
//   console.log(k); //! return error.
// }
// show();
////////////////////////////////////////////////////////////////////////
//* function along with it's leckcical state bundel form's an clousre.
//Ex:2
// function x() {
//   var a = 7;
//   return function y() {
//     console.log(a);
//   };
// }
// var z = x();
// console.log(z);
/////////////////////////////////////////////////////////////
// Ex: 3
// function z() {
//   var a = 7;
//   function y() {
//     var b = 700;
//     function x() {
//       console.log(a, b); //* it can also access it's parent parent's variables(value).
//     }
//     //* if we call the value of any variable it search for the reffered value to that variable, it does not stores the value of that variable.
//     //* variable is an reference , after calling it searches for the reference value
//     b = 7;
//     x(); //! return b = 7 not 700.
//   }
//   y();
// }
// z();

//* -----------------------------------------------x-x-----------------------------------------------------------------//

//? 8.Array methods

// Example ONe(1)
const companies = [
  { name: "company one", categary: "finance", start: 1981, end: 2001 },
  { name: "company two", categary: "retail", start: 1992, end: 2008 },
  { name: "company three", categary: "Automobile", start: 1999, end: 2007 },
  { name: "company four", categary: "technology", start: 1981, end: 2001 },
  { name: "company five", categary: "retail", start: 1992, end: 1983 },
  { name: "company six", categary: "technology", start: 1975, end: 1999 },
  { name: "company seven", categary: "finance", start: 1979, end: 1975 },
  { name: "company eight", categary: "technology", start: 1956, end: 2001 },
  { name: "company nine", categary: "Automobile", start: 1989, end: 2004 },
  { name: "company ten", categary: "retail", start: 2002, end: 2010 },
];
const ages = [2, 7, 12, 8, 34, 71, 12, 3, 9, 6];
// console.log(
//   companies.filter((company) => company.start >= 1980 && company.start < 1990)
// );
// console.log(companies.filter((company) => company.end - company.start >= 10));
// console.log(companies.filter((company) => company.start >= 1900));
// console.log(
//   companies.map(
//     (company) => `${company.name} [${company.start} : ${company.end}]`
//   )
// );
// );
// console.log(ages.map((age) => Math.sqrt(age)).map((age) => age * 2));
// log;
// console.log(companies.sort((a, b) => (a.start > b.start ? 1 : -1)));
// console.log(ages.sort((a, b) => (a > b ? 1 : -1)));
// console.log(ages.sort((a, b) => (a - b ? 1 : -1)));
// console.log(
//   ages
//     .map((age) => age * 2)
//     .filter((age) => age >= 20)
//     .sort((a, b) => a - b)
//     .reduce((a, b) => a + b, 0)
// );

////////////////////////////////////////////////////////////

// Example Two(2)

const inventor = [
  { first: "albert", last: "Einstien", year: 1879, passed: 1955 },
  { first: "Isaac", last: "newton", year: 1799, passed: 1789 },
  { first: "galileo", last: "galieio", year: 1678, passed: 1702 },
  { first: "Marieo", last: "curio", year: 1879, passed: 1998 },
  { first: "Jahn", last: "zack", year: 1869, passed: 1957 },
  { first: "Nicolus", last: "random", year: 1678, passed: 1698 },
  { first: "Max", last: "planck", year: 2002, passed: 2020 },
  { first: "harry", last: "potter", year: 1989, passed: 1999 },
  { first: "edd", last: "shear", year: 2000, passed: 2020 },
  { first: "nepolian", last: "hill", year: 1986, passed: 1989 },
  { first: "will", last: "smith", year: 1908, passed: 1998 },
];
const people = [
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipisicing",
  "elit",
  "dolores",
  "veniam",
  "debitis",
  "nesciunt",
  "quaerat",
  "dicta",
  "quibusdam",
  "repellendus",
  "officiis",
  "animi",
  "quo",
  "eum",
  "optio",
  "deserunt",
  "error",
  "aliquam",
  "exercitationem",
  "ratione",
  "maxime",
  "delectus",
  "laborum",
  "saepe",
];
/////////////////////////////////////
// born in 1900's

// console.log(
//   inventor.filter((inventor) => inventor.year >= 1900 && inventor.year < 2000)
// );

////////////////////////////////////////
// first and last name

// console.log(inventor.map((inventor) => `${inventor.first},${inventor.last}`));

///////////////////////////////////////////

// sorting by birthdate

// console.log(inventor.sort((a, b) => a.year - b.year));

////////////////////////////////////////////////

// how many year inventor live ?

// console.log(
//   inventor.reduce(
//     (total, inventor) => total + inventor.passed - inventor.year,
//     0
//   )
// );

///////////////////////////////////////////////////

// sort the inventor year they lived
// const oldest = inventor.sort((a, b) => {
//   let newest = a.passed - a.year;
//   let oldest = b.passed - b.year;
//   return oldest > newest ? 1 : -1;
// });
// console.table(oldest);

///////////////////////////////////////////////////////
// sort people name alphabeticaly

// console.log(people.sort((a, b) => (a > b ? 1 : -1)));

/////////////////////////////////////////////////////////

//Example Three(3)

const object = [
  "car",
  "truck",
  "bike",
  "aeroplane",
  "cycle",
  "boat",
  "car",
  "truck",
  "bike",
  "aeroplane",
  "cycle",
  "boat",
  "car",
  "truck",
  "bike",
  "aeroplane",
  "cycle",
  "boat",
  "car",
  "truck",
  "bike",
  "aeroplane",
  "cycle",
  "boat",
  "car",
  "truck",
  "bike",
  "aeroplane",
  "cycle",
  "boat",
  "car",
  "truck",
  "bike",
  "aeroplane",
  "cycle",
  "boat",
  "car",
  "truck",
  "bike",
  "aeroplane",
  "cycle",
  "boat",
  "car",
  "truck",
  "bike",
  "aeroplane",
  "cycle",
  "boat",
  "car",
  "truck",
  "bike",
  "aeroplane",
  "cycle",
  "boat",
  "car",
  "truck",
  "bike",
  "aeroplane",
  "cycle",
  "boat",
  "car",
  "truck",
  "bike",
  "aeroplane",
  "cycle",
  "boat",
  "car",
  "truck",
  "bike",
  "aeroplane",
  "cycle",
  "boat",
  "car",
  "truck",
  "bike",
  "aeroplane",
  "cycle",
  "boat",
  "car",
  "truck",
  "bike",
  "aeroplane",
  "cycle",
  "boat",
];

// const transportation = object.reduce(function (Obj, item) {
//   if (!Obj[item]) {
//     Obj[item] = 0;
//   }
//   Obj[item]++;
//   return Obj;
// }, {});
// console.log(transportation);
// console.log(object);
//* ------------------------------------------------x-x----------------------------------------------------------------//

//? 9.Spread Array.

// Array Cardio
// const people = [
//   { name: "shiv", year: 1920 },
//   { name: "Raj", year: 1918 },
//   { name: "Uttu", year: 1921 },
//   { name: "Sidd", year: 1920 },
//   { name: "Jini", year: 1921 },
// ];
// const comments = [
//   { Text: "Love this", id: 34523 },
//   { Text: "Super good", id: 87343 },
//   { Text: "You are the best", id: 23456 },
//   { Text: "Ramen in my fav food ever", id: 87943 },
//   { Text: "Nice nice nice!", id: 84395 },
// ];
///////////////////////////////////////////////

// -------------Just Uncomment the below code portion ------------//

//Array.prototype.some() method;
//it will check if atleast one thing in your array.
// and return only first match.
// console.log("Array.prototype.some() method.");
// console.log("it will check if atleast one thing in your array.");
// const isAdult = people.some(function (person) {
//   const currentYear = new Date().getFullYear();
//   if (currentYear - person.year >= 19) {
//     return true;
//   }
// });
// console.log({ isAdult });
// ------------OR---------//
// console.log(
//   people.some((person) => new Date().getFullYear() - person.year >= 19)
// );
/////////////////////////////////////////////
//Array.prototype.every() method;
//checking is everyone is adult.
// console.log("Array.prototype.every() method;");
// console.log("checking is everyone is adult.");
// const allAdult = people.every(function (person) {
//   const currentYear = new Date().getFullYear();
//   if (currentYear - person.year >= 19) {
//     return true;
//   }
// });
// console.log({ allAdult });
// ------------OR---------//
// console.log(
//   people.every((person) => new Date().getFullYear() - person.year >= 19)
// );

///////////////////////////////////////////////
//Array.prototype.find() method.
//find is like filter but instead of returning all it will return only one/single match.
//It will return the result in an object istead of an array.
// console.log("Array.prototype.find() method.");
// console.log(
//   "find is like filter but instead of returning all it will return only one/single match."
// );
// console.log("It will return the result in an object istead of an array.");

// const findId = comments.find(function (comments) {
//   if (comments.id === 87343) {
//     return true;
//   }
// });
// console.log({ findId });
// const findnewId = comments.find((comments) => comments.id === 87343);
// console.log(findnewId);
// // ------------OR---------//
// console.log(comments.find((comments) => comments.id === 87343));

////////////////////////////////////////////////
//Array.prototype.findIndex() method;
//find the comment with this Id and delete the comment with the Id of 87343.
// console.log("Array.prototype.findIndex() method;");
// console.log(
//   "finding the comment and deleting the comment with the Id of 87343."
// );

// const deleteId = comments.findIndex((comments) => comments.id === 87343);
// console.table(comments);
// comments.splice(deleteId, 1);
// console.table(comments);

////////////////////////////////////////////////////

//Creating new array of tht updated array.
// console.log("Creating new array of tht updated array.");
// const Index = comments.findIndex((comments) => comments.id === 87343);
// console.table(comments);
// const newIndex = [...comments.slice(0, Index), ...comments.slice(Index + 1)];
// console.table(newIndex);

//* ------------------------------------------------x-x----------------------------------------------------------------//

//? 10.Event Binding.

//* When we use this approach we can add or remove handlers dynamically as well as it improves the sepration between the structure of document and its logic and presentation.
//Ex:1
// document.getElementById("clickMe").onclick = function () {
//   alert("Thks for clicking me ☺");
// };
////////////////////////////////////////////////////
//Ex:2
// const btn = document.getElementById("clickMe");
// btn.addEventListener("click", () => {
//   alert("you clicked me ☺");
// });
///////////////////////////////////////////////////
//Ex:3
// function btn() {
//   alert("you clicked me ☺");
// }
// const btnn = document.getElementById("clickMe");
// btnn.addEventListener("click", btn);
///////////////////////////////////////////////
// AND so many more ways.

//* ------------------------------------------------x-x-----------------------------------------------------------------//

//? 11.Event Loop
//*  all the setTimeout/Dom/AJAX-API Calls/Eventlistenor goes in "Web Api" section and executes when they are called or set time is finesh.

//* -----> when function time overs "web api" send the function to "message queue" when "message queue" get empty,or the previous function sended for the execution.

//* -----> "Message Queue" section passes the function for execution in GLobal Execution section, and eccepts next request from the "web api".
////////////////////////////////////////////////////
//Ex:1

//* Executing fun2() -------->
// const fun2 = () => {
//   //* passing setTimeout into "web Api" section, and execute when time overs  ---->
//   setTimeout(() => {
//     console.log("fun2 is start");
//   }, 3000);
//   //* function return ------->
// };
// //* Executing fun1() -------->
// const fun1 = () => {
//   console.log("fun1 is start"); //* Executes ---->
//   fun2(); //*  calling fun2() --->
//   console.log("fun3 is start"); //* Executes ---->
// };
// fun1(); //* Calling fun1() ----->

//! return:
//! fun1 is start
//! fun3 is start
//! fun2 is start

//* ------------------------------------------------x-x-----------------------------------------------------------------//

//? 12.Generator

//* In javascript , a generator is a function which returns an object on which you can call next(). Every invocation of next() will return an object of shape - { value: Any, done: true|false}.

//? what are generators ?
//* generators are fucntions the returns an obect which conforms to the ltreable - ltretor protocols. You might not have heard of these protocols, but, ever since ES2015, they are used to loop over or spread objects like array,map,set,and string.

//? Generator Use:
//* generator are fucntion that return an object which conforms to the lterable - and lterator protocols.. Generator fucntions are created by adding an '*' after the function keyword. ' Yielding' values pauses the execution of the funciton until the next value is requested. Let's look at some basic examples.

//generator which creates a range of numbers.
// function* range(start, end) {
//   let i = start;
//   while (i < end) {
//     yield i++;
//   }
// }
//The previous generator function is functionally equevalent to the next one.
//A function that takes 2 parameters and returns an object with a next method.

// const range2 = (start, end) => ({
//   i: start,
//   next() {
//     while (this.i < end) {
//       return { value: this.i++, done: false };
//     }
//     return { value: undefined, done: true };
//   },
//   [Symbol.iterator]() {
//     return this;
//   },
// });
// for (let n of range2(0, 20)) {
//   console.log(n);
// }
// const range0to2 = range2(0, 2);
// console.log(range0to2.next().value);
// console.log(range0to2.next().value);

//? syntax:
//'*' is used before the function_name or after the function to make that function a generator function.
//* function *generatorName() {
// In noramal function we use return keyword to return any value, but in generator fucntion we yield;
//*   yield 8;
//yield is used to paused the function on that statement until another statement is not called, by using .next().
//*   yield 8;
//*   yield 8;
//* }
// to call that function we to assign that function into and variable, and call the statements using .next()
// let get = generatorName();
// get.next(); -------> it will return result of first statement.
// get.next(); -------> second.
// get.next(); -------> third.
// get.next(); -------> fourth.

//* If we call normal function all the statements inside the function will automatically start executing which is not in our control, to obtain control to your function we use 'yield' in generator.

//Ex:1
// function* generatorName() {
//   yield "yield no.1";
//   yield "yield no.2";
//   yield "yield no.3";
//   yield "yield no.4";
// }
// const get = generatorName();
// console.log(get);
// console.log(get.next());
// console.log(get.next());
// console.log(get.next());
// console.log(get.next());
// console.log(get.next());

//Ex:2
// function* generatorName() {
//   yield "yield no.1";
//   yield "yield no.2";
//   yield "yield no.3";
//   yield "yield no.4";
// }
// const get = generatorName();
// console.log(get.next().value);
// get.next();
// console.log(get.next().value);
// get.next();
// console.log(get.next().value);

//Ex:3 if we want to perform all statements , we can use for(of ) loop.
// function* generatorName() {
//   yield "yield no.1";
//   yield "yield no.2";
//   yield "yield no.3";
//   yield "yield no.4";
// }
// const get = generatorName();
// for (let value of get) {
//   console.log(value);
// }

//* if we want to generat no. of yield.
//Ex:4
// function* genfunction() {
//   let nexNum = 300;
//   while (true) {
//     yield nexNum++;
//   }
// }
// let get = genfunction();
// console.log(get.next().value);
// console.log(get.next().value);
// console.log(get.next().value);
// console.log(get.next().value);
// console.log(get.next().value);
// console.log(get.next().value);
// console.log(get.next().value);
// console.log(get.next().value);
// console.log(get.next().value);

//OR

//Ex:5
// function* genfunction() {
//   let nexNum = 300;
//   while (true) {
//     yield nexNum++;
//   }
// }
// let get = genfunction();
// for (let value of get) {
//   if (value > 305) break;
//   console.log(value);
// }

// Ex:6
// function* genfunction() {
//   let nexNum = 300;
//   let result = yield;
// }
// let get = genfunction();
// console.log(get);
// console.log(get.next(500));

//Ex:7
// function* genfunction() {
//   let yArray = [yield, yield, yield, yield];
//   console.log(`Result: ${yArray}`);
// }
// let get = genfunction();
// get.next();
// get.next(500);
// get.next(600);
// get.next(600);
// get.next(600);

//Ex:8
// function* genfunction() {
//   yield 55;
//   yield ["node", "javascript", "react"];
//   //if we want to read single value from array at a time.
//   //   yield* ["node", "javascript", "react"];
// }
// let g = genfunction();
// console.log(g.next());
// console.log(g.next());

//Ex: 9
// function* genfunction() {
//   yield "php";
//   yield "node";
//   yield "angular";
//   yield "react";
//   yield "python";
// }
// let g = genfunction();
// console.log(g.next().value);
// console.log(g.next().value);
// // we can also use spread operator to get all remaining value in and array.
// console.log([...g]);

//Ex: 10
//if we want to stop our genrator function we can use 'return' keyword to stop executing next line statements.
// function* genfunction() {
//   yield "php";
//   //we can also pass an reason withon return
//   return "function ends here";
//   yield "node";
//   yield "angular";
//   yield "react";
//   yield "python";
// }
// let g = genfunction();
// console.log(g.next().value);
// console.log(g.next().value);
//* -----------------------------------------------x-x-----------------------------------------------------------------//

//* -----------------------------------------------x-x-----------------------------------------------------------------//
