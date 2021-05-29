//? Web Platform topics

//? 1.DOM Manipulation.

//? What is the DOM?
//* The DOM is a W3C (World Wide Web Consortium) standard.
// The DOM defines a standard for accessing documents:
// "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."

//*The W3C DOM standard is separated into 3 different parts:

// Core DOM - standard model for all document types
// XML DOM - standard model for XML documents
// HTML DOM - standard model for HTML documents

//*The HTML DOM model is constructed as a tree of Objects:
//* With the object model, JavaScript gets all the power it needs to create dynamic HTML:
// JavaScript can change all the HTML elements in the page
// JavaScript can change all the HTML attributes in the page
// JavaScript can change all the CSS styles in the page
// JavaScript can remove existing HTML elements and attributes
// JavaScript can add new HTML elements and attributes
// JavaScript can react to all existing HTML events in the page
// JavaScript can create new HTML events in the page

//? What is DOM Manipulation in JavaScript?
//* The document Object Module (DOM) is a programming interface for HTML and XML document. ...The Document object

//? How to target DOM object?
//* we can target it by using three methods.
//1. ID. ----> document.getElementById(id)
//2. Class Name. -----> document.getElementByClassName(name)
//3. Tag Name. -----> document.getElementByTagName(name)

//* Other DOM Targeting Mathods:
// document
// document.all
// document.documentElement
// document.head
// document.title
// document.body
// document.images
// document.anchors
// document.links
// document.forms
// document.doctype
// document.URL
// document.baseURI
// document.domain

//* ------------------------------------------------x-x-----------------------------------------------------------------//

//? 2.Ajax

//? What is AJAX?
//* AJAX = Asynchronous JavaScript And XML.

//* AJAX is not a programming language.

//* AJAX just uses a combination of:
// A browser built-in XMLHttpRequest object (to request data from a web server)
// JavaScript and HTML DOM (to display or use the data)

//* AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

//? How AJAX Works?

// 1. An event occurs in a web page (the page is loaded, a button is clicked)
// 2. An XMLHttpRequest object is created by JavaScript
// 3. The XMLHttpRequest object sends a request to a web server
// 4. The server processes the request
// 5. The server sends a response back to the web page
// 6. The response is read by JavaScript
// 7. Proper action (like page update) is performed by JavaScript

//* ------------------------------------------------x-x-----------------------------------------------------------------//

//? 3.Service Workers.

//? What is a service workers?

// ---> A JS script that gets registered with browser .
// ---> Stay registered with the browser even when offline.
// ---> Can load connection even with non connection.

// A service worker is a script that runs independently in the browser background. On the user side, it can intercept its network requests and decide what to load (fetch).
// Service workers mainly serve features like background sync, push notifications and they are commonly used for’offline first’ applications, giving the developers the opportunity to take complete control over the user experience.

//?The service worker life cycle:
//* The service worker lifecycle is completely separate from the web page. It’s a programmable network proxy, which is terminated when it’s not used and restarted when it’s next needed. Service Workers heavily rely on the use of Javascript Promises , so it’s good to go over them if they are new to you

// During installation, the service worker can cache some static assets like web pages. If the browser cache the files successfully, the service worker gets installed.

// Afterward, the worker needs to be activated. During activation the service worker can manage and decide what to happen to the old caches, typically they are being deleted and replaced with the new versions.

//* ------------------------------------------------x-x-----------------------------------------------------------------//

//? 4.Fetch APIs.

//* The Fetch API interface allows web browser to make HTTP requests to web servers.

// 😀 No need for XMLHttpRequest anymore.

//* A Web API is a developer's dream.

// It can extend the functionality of the browser
// It can greatly simplify complex functions
// It can provide easy syntax to complex code

//? What is Web API?
// API stands for Application Programming Interface.

// A Web API is an application programming interface for the Web.

// A Browser API can extend the functionality of a web browser.

// A Server API can extend the functionality of a web server.

//? Browser APIs

// All browsers have a set of built-in Web APIs to support complex operations, and to help accessing data.

// For example, the Geolocation API can return the coordinates of where the browser is located.

// Example
//* Get the latitude and longitude of the user's position:

// var x = document.getElementById("demo");

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude;
// }

//? Third Party APIs
//* Third party APIs are not built into your browser.

//* To use these APIs, you will have to download the code from the Web.

// Examples:

// YouTube API - Allows you to display videos on a web site.
// Twitter API - Allows you to display Tweets on a web site.
// Facebook API - Allows you to display Facebook info on a web site.

// document.getElementById("sampleText").addEventListener("click", getText);
// document.getElementById("GetUsers").addEventListener("click", getUser);
// document.getElementById("addPost").addEventListener("submit", addPost);
// function getText() {
//   //   fetch("sample.txt")
//   //     .then(function (response) {
//   //       return response.text();
//   //     })
//   //     .then(function (data) {
//   //       console.log(data);
//   //     });

//   //we can write it in more understanding way using arrow function.
//   fetch("sample.txt")
//     .then((response) => response.text())
//     .then((data) => {
//       document.querySelector(".output").innerHTML = data;
//     });
// }
// function getUser() {
//   fetch("sample.json")
//     .then((respons) => respons.json())
//     .then((data) => {
//       let output = "<h2>user</h2>";
//       data.forEach(function (user) {
//         output += `
//             <ul>
//             <li> ID: ${user.id}</li>
//             <li> Name: ${user.name}</li>
//             <li> Email: ${user.email}</li>
//             </ul>`;
//       });
//       document.querySelector(".output").innerHTML = output;
//     });
// }

// function addPost() {
//   e.preventDefault();
//   let title = document.getElementById("title");
//   let Body = document.getElementById("body");
//   fetch("sample.json", {
//     method: "POST",
//     headers: {
//       Accept: "aplication/json, text/json, */*",
//       "Content-type": "aplication/json",
//     },
//     body: JSON.stringify({ title: title, body: Body }),
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

//* ------------------------------------------------x-x-----------------------------------------------------------------//

//? 5.Local Storage.

//? Definition and Usage
//* The localStorage and sessionStorage properties allow to save key/value pairs in a web browser.

//* The localStorage object stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.

//* The localStorage property is read-only.

//? Syntax
// window.localStorage

//? Syntax for SAVING data to localStorage:
// localStorage.setItem("key", "value");

//? Syntax for READING data from localStorage:
// var lastname = localStorage.getItem("key");

//? Syntax for REMOVING data from localStorage:
// localStorage.removeItem("key");

//? Technical Details
// Return Value:	A Storage object

//? Create a localStorage name/value pair with name="lastname" and value="Smith", then retrieve the value of "lastname" and insert it into the element with id="result":

// // Store
// localStorage.setItem("lastname", "Smith");
// // Retrieve
// document.getElementById("result").innerHTML = localStorage.getItem("lastname");

//Ex:
//*storing  value
// localStorage.setItem("hello", "world");
// localStorage.setItem("hello2", "world2");
//*getting value
// localStorage.getItem('hello')
// localStorage.getItem('hello2')
//*removing value
// localStorage.removeItem('hello')
//* clearing localstorage.
// localStorage.clear();

//Ex:
// //* storing string value
// const user = {
//   name: "shivam",
//   age: 19,
//   language: "javascript",
// };
// //storing value
// localStorage.setItem("user", JSON.stringify(user));
// // getting value and console it.
// console.log(JSON.parse(localStorage.getItem("user")));
// const age = JSON.parse(localStorage.getItem("user"));
// console.log(age.age);

//* ------------------------------------------------x-x-----------------------------------------------------------------//

//? 6.Cookies.
//* Cookies let you store user information in web pages.

//? What are Cookies?
// Cookies are data, stored in small text files, on your computer.

// When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.

//* Cookies were invented to solve the problem "how to remember information about the user":

// When a user visits a web page, his/her name can be stored in a cookie.
// Next time the user visits the page, the cookie "remembers" his/her name.

//* Cookies are saved in name-value pairs like:
// username = John Doe

//* When a browser requests a web page from a server, cookies belonging to the page are added to the request. This way the server gets the necessary data to "remember" information about users.

//? Create a Cookie with JavaScript
// JavaScript can create, read, and delete cookies with the document.cookie property.

//* With JavaScript, a cookie can be created like this:
// document.cookie = "username=John Doe";

//* You can also add an expiry date (in UTC time). By default, the cookie is deleted when the browser is closed:
// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";

//* With a path parameter, you can tell the browser what path the cookie belongs to. By default, the cookie belongs to the current page.
// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

//? Read a Cookie with JavaScript
//* With JavaScript, cookies can be read like this:
// var x = document.cookie;
// document.cookie will return all cookies in one string much like: cookie1=value; cookie2=value; cookie3=value;

//? Change a Cookie with JavaScript
//* With JavaScript, you can change a cookie the same way as you create it:
// document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

// *The old cookie is overwritten.

//? Delete a Cookie with JavaScript
//* Deleting a cookie is very simple.

// You don't have to specify a cookie value when you delete a cookie.

// Just set the expires parameter to a past date:

// document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
// You should define the cookie path to ensure that you delete the right cookie.

// Some browsers will not let you delete a cookie if you don't specify the path.
//* ------------------------------------------------x-x-----------------------------------------------------------------//
