// ==================================================
// JAVASCRIPT TASK FLOW: FROM WORDING → CODE ACTION
// ==================================================


// --------------------------------------------------
// 1. "Create / Define / Initialize"
// --------------------------------------------------

// Prompt wording:
// "Create a variable called ___"
// "Create an object that stores ___"
// "Initialize ___ with a starting value"

// Think:
// "What information does my program need to remember?"

let cart = {
    items: [],        // stores multiple values
    total: 0          // stores changing information
};



// --------------------------------------------------
// 2. "Create a Function"
// --------------------------------------------------

// Prompt wording:
// "Write a function called ___"
// "Create a function that performs ___"
// "Define a function to handle ___"

// Think:
// "What action does my program need to perform?"

function addItem(item, price) {

    // --------------------------------------------------
    // 3. "Accept / Pass Information"
    // --------------------------------------------------

    // Prompt wording:
    // "The function takes ___ as a parameter"
    // "Pass the item into the function"

    // Think:
    // "Does this function need information from outside?"



    // --------------------------------------------------
    // 4. "Add / Insert / Append Information"
    // --------------------------------------------------

    // Prompt wording:
    // "Add the item to the array"
    // "Insert a new item"
    // "Store this new value"

    // Think:
    // "I am adding something to existing data."

    cart.items.push(item);



    // --------------------------------------------------
    // 5. "Update / Modify / Change Data"
    // --------------------------------------------------

    // Prompt wording:
    // "Update the total"
    // "Modify the object"
    // "Change the current value"

    // Think:
    // "The information already exists. I need to change it."

    cart.total += price;

}



// --------------------------------------------------
// 6. "Check / Determine / Decide"
// --------------------------------------------------

// Prompt wording:
// "Check if ___"
// "Determine whether ___"
// "If ___ is true"
// "Otherwise"

// Think:
// "The program needs to choose between outcomes."

function checkout() {

    if (cart.total > 0) {

        console.log(`Total: $${cart.total}`);

    }

    else {

        console.log("Cart is empty");

    }

}



// --------------------------------------------------
// 7. "Remove / Delete"
// --------------------------------------------------

// Prompt wording:
// "Remove the last item"
// "Delete an element"
// "Remove from the list"

// Think:
// "I need to take existing information away."

function removeItem(price) {

    cart.items.pop();

    cart.total -= price;

}



// --------------------------------------------------
// 8. "Find / Search / Check Existence"
// --------------------------------------------------

// Prompt wording:
// "Check if the item already exists"
// "Determine if the array contains ___"

// Think:
// "I need to look inside my data."

if (cart.items.includes("Pizza")) {

    console.log("Item exists");

}



// --------------------------------------------------
// 9. "Loop / Iterate / Repeat"
// --------------------------------------------------

// Prompt wording:
// "Loop through the items"
// "For every item"
// "Repeat this action"

// Think:
// "I need to perform the same action multiple times."

for (let i = 0; i < cart.items.length; i++) {

    console.log(cart.items[i]);

}



// --------------------------------------------------
// 10. "Return"
// --------------------------------------------------

// Prompt wording:
// "Return the result"
// "Return the filtered items"
// "Output the value"

// Think:
// "Send information back to where the function was called."

function getTotal() {

    return cart.total;

}



// --------------------------------------------------
// 11. "Display / Show / Render"
// --------------------------------------------------

// Prompt wording:
// "Display the result"
// "Show the information on the page"
// "Update the webpage"

// Think:
// "The user needs to see the JavaScript data."

let display = document.getElementById("cartDisplay");

display.textContent = cart.total;



// --------------------------------------------------
// 12. "When the User Does Something"
// --------------------------------------------------

// Prompt wording:
// "When the button is clicked"
// "When the user submits"
// "Respond to user input"

// Think:
// "I need an event that triggers my function."

button.addEventListener("click", function(){

    addItem("Pizza", 10);

});

// WHAT INFORMATION DO I NEED?
// → Variables / Objects


// WHAT CAN CHANGE?
// → let variables


// WHAT DECISIONS HAPPEN?
// → if / else / switch


// WHAT REPEATS?
// → loops


// WHAT ACTION NEEDS TO HAPPEN?
// → functions


// WHAT DOES THE USER DO?
// → events


// WHAT DOES THE USER SEE?
// → DOM manipulation