
// /////////////////////////////
// //DOM Manipulation Actvity//
// /////////////////////////////

// // let taskInput = document.getElementById("taskInput");
// // let addTaskButton = document.getElementById("addTaskButton");
// // let taskList = document.getElementById("taskList");

// // // Runs when the user clicks "Add Task"
// // addTaskButton.addEventListener("click", function () {

// //     // Capture user input
// //     let taskText = taskInput.value;

// //     // Validate input
// //     if (taskText === "") {
// //         alert("Dangg Put sum!");
// //         return;
// //     }

// //     // Create a new list item
// //     let listItem = document.createElement("li");

// //     // Put the user's text inside the list item
// //     listItem.textContent = taskText;

// //     // Add the list item to the page
// //     taskList.appendChild(listItem);

// //     // Clear the input field
// //     taskInput.value = "";
// // });


// // // Runs when a user clicks anywhere inside the task list
// // taskList.addEventListener("click", function (event) {

// //     console.log(event);

// //     // Check if the clicked element is a list item
// //     if (event.target.tagName === "LI") {

// //         // Remove the clicked task
// //         taskList.removeChild(event.target);
// //     }
// // });

// /* Practice: 
// let firstHeading = document.getElementById("firstHeading");

// firstHeading.addEventListener("mouseover", function () {
// //     console.log("Hovered!"); 
// // })
// // //  let cardContent = document.getElementById("cardContent");
// // //  cardContent.addEventListener("click", function(){
// // //     console.log("Card Selected");

// // //  })

// // //  let largeTextTitle = document.querySelector("#largeTextTitle");

// // //  largeTextTitle.addEventListener("click", function (event) {
// // //     console.log(event);
// // // if(event.target === "largeTextTitle") {
// // //     alert("You've clicked!");
// // // }
// // // })

// // // let headingOfCard = document.getElementById("headingOfCard");
// // // headingOfCard.innerText = "Turn up turn up!";
// // // console.log(headingOfCard);
// // // }*/


// // // //Shopping Cart
// // // let cartList = document.getElementById("cart")
// // // let cart =[];
// // // let itemInput = document.getElementById ("itemInput");
// // // let addItemButton = document.getElementById("addItemButton");
// // // let removeItemButton = document.getElementById("removeItemButton"); 

// // // addItemButton.addEventListener("click", function(){
// // //     let item = itemInput.value; 
// // //     if(item === ""){
// // //         alert("Please enter an Item");
// // //     return;
// // //     }
// // //     cart.push(item);
// // //     renderCart(); // Initally Clears whatever the element is holding.
// // //     itemInput.value = ""; 
// // // })

// // // removeItemButton.addEventListener("click", function(){
// // //    cart.pop();
// // //    renderCart();
// // // })

// // // function renderCart() {
// // //   cartList.innerHTML = ""; // Clear existing list
// // //   for (let i = 0; i < cart.length; i++) {
// // //     let listItem = document.createElement("li");
// // //     listItem.innerText = cart[i];
// // //     cartList.appendChild(listItem);
// // //   }
// // // }

// // let orderSelectionButton = document.getElementById("orderSelection");
// // let orderDeselectionButton = document.getElementById("orderDeselectionButton");
// // let itemInput = document.getElementById("itemInput");
// // let itemList = document.getElementById("itemList");

// // let items = [];

// // orderSelectionButton.addEventListener("click", function () {

// //     // Get the user's input
// //     let item = itemInput.value;

// //     // Validate the input
// //     if (item === "") {
// //         alert("Please Make a Selection");
// //         return;
// //     }

// //     // Add the item to the array
// //     items.push(item);

// //     // Update the page
// //     renderItems();

// //     // Clear the input
// //     itemInput.value = "";
// // });

// // orderDeselectionButton.addEventListener("click", function () {
// //     items.pop();
// //     renderItems();
// // });

// // function renderItems() {

// //     // Clear the existing list
// //     itemList.innerHTML = "";

// //     // Rebuild the list from the array
// //     for (let i = 0; i < items.length; i++) {

// //         let listItem = document.createElement("li");

// //         listItem.innerText = items[i];

// //         itemList.appendChild(listItem);
// //     }
// // }


// // let drink = "lemonade";
// // let snack = "Chips"

// // function favoriteSnack(drink, snack){
// // console.log(`My favorite snack is ${snack} and my drink is ${drink}`);
// // }
// // favoriteSnack(drink, snack);

// // //Challenge 2:
// // let firstName = "Tamira";
// // let lastName = "Hawkins";
// // let age = 21;

// // function introduce(firstName, lastName, age){
// // //     console.log(`Hi my name is ${firstName}  ${lastName} and I am ${age} years old. `)
// // // }

// // introduce(firstName, lastName, age);

// // let age = 21;

// // function checkAge(age) {

// //     if (age >= 18) {
// //         console.log("Welcome! You may enter.");
// //     }
// //     else {
// //         console.log("Sorry, you must be 18 or older.");
// //     }

// // }

// // checkAge(age);

// // let hasTicket =true;
// // let age =21;

// // function enterConcert(age, hasTicket){
// //     if( age >= 18 && hasTicket) {
// //         console.log("Enjoy the Concert")
// //     }
// //     else {
// //         console.log("Bye gurrrrl");
// //     }
// // }

// //Additional Challenge 1:
// let age = 16;
// let hasParent = true;

// function functioncanWatchMovie(age, hasParent) {
//     if (age >= 13 || hasParent) {
//         console.log("Have a good time!");
//     }
//     else  {
//         console.log("Sorry, you may not enter.");
//     }
// }

// //Additional challenge 2
// // let item = "Shoes";
// // let price = 50;
// // let hasMoney = true;

// // function purchaseItem(item, price, hasMoney) {
// //    if (item !== "" && price <= 100 && hasMoney ){
// //         console.log("Purchase Successful");
// //    }
// //    else{
// //     console.log("Payment Declined");
// //    }
// // }

// // purchaseItem(item, price, hasMoney);

// // // Additional challenge 3 
// // let guests = 4;
// // let hasReservation = true;
// // let restaurantOpen = true;

// // function reserveTable(guests, hasReservation, restaurantOpen) {
// //     if (restaurantOpen && hasReservation && guests <= 6) {
// //         console.log("Get yo table ho");
// //     }
// //     else{
// //         console.log("bye ho");
// //     }
// // }
// // reserveTable(guests, hasReservation, restaurantOpen);

// // let game = "Mario Kart";
// // let price = 60;
// // let hasMembership = true;
// // let wallet = 100;

// // function buyGame(game, price, hasMembership, wallet) {

// //     if (game !== "" && wallet >= price && (hasMembership || price < 50)) {
// //         console.log("Purchase complete: " + game);
// //     }
// //     else {
// //         console.log("Cannot purchase game.");
// //     }

// // }

// // buyGame(game, price, hasMembership, wallet);


// /////////////////////////////
//Logical operators Syntax//
// /////////////////////////////

// // let username = "Tamira";
// // let password = "javascript123";
// // let isVerified = true;

// // function login(username, password, isVerified) {
// //     if(username !== "" && password.length >= 8 && isVerified ){
// //         console.log("Login Successful");
// //     }
// // }
// // login(username, password, isVerified);


// /////////////////////////////
//Switch Operations Syntax//
// /////////////////////////////
// let choice = prompt("Choose a pet: dog, cat, bird");

// switch(choice) {
//     case "dog":
//         console.log("dog");
//     break;
//     case "cat":
//         console.log("cat");
//     break;
//     case "bird":
//         console.log("bird");
//     break;
    
//     default:
//         console.log("Please select a pet above.");
// }


// /////////////////////////////
//Return using arethmetic Syntax//
// /////////////////////////////

// let price = 12;
// let tax = 3;

// function addNumbers(price, tax) {
//     return price + tax;
// }
// let result = addNumbers(12, 3); //Output 15.

// let num1 = 8;
// let num2 = 6;

// function multiplyNumbers(num1, num2){
//     return num1 * num2;
// }
//  let result = multiplyNumbers(8,6);

// /////////////////////////////
//Boolean Syntax//
// /////////////////////////////
//  let score = 87;

// let passed = score >= 70;

// console.log(passed);

// if(passed){
//     console.log("Congrats");
// }
// else {
//     console.log("Failed");
// }

// /////////////////////////////
//if, else if, else, statements //
// /////////////////////////////
//  let hour = 14;
//  if (hour < 12) {
//     console.log("Good Morning!");
//  }
//  else if (hour < 18) {
//     console.log("Good Afternoon!");
//  }
//   else {
//     console.log("Good Evening!");
//   }