"use strict";

// arrays for destination, restuarant, transportation, and entertainment options

let destinationArray = ["Denver", "Las Vegas", "Phoenix", "Seattle"];
let restaurantArray = ["Yard House", "Buffalo Wild Wings", "Capital Grille", "Cheesecake Factory"];
let transportationArray = ["car", "airplane", "train", "bus"];
let entertainmentArray = ["a sporting event", "a concert", "hiking", "shopping"];


// functions for generating random destination

function randomDestinationFunction(destination) {
    let randomDestination = destination[Math.floor(Math.random() * destination.length)];
            //console.log(randomDestination);
            return randomDestination;
}

// function for generating random restuarant

function randomRestaurantFunction(restaurant) {
    let randomRestaurant = restaurant[Math.floor(Math.random() * restaurant.length)];
            //console.log(randomRestaurant);
            return randomRestaurant;
}

// function for generating random transportation

function randomTransportationFunction(transportation) {
    let randomTransportation = transportation[Math.floor(Math.random() * transportation.length)];
            //console.log(randomTransportation);
            return randomTransportation;
}

// function for generating random entertainment

function randomEntertainmentFunction(entertainment) {
    let randomEntertainment = entertainment[Math.floor(Math.random() * entertainment.length)];
            //console.log(randomEntertainment);
            return randomEntertainment;
}

let destination = randomDestinationFunction(destinationArray);
let restaurant = randomRestaurantFunction(restaurantArray);
let transportation = randomTransportationFunction(transportationArray);
let entertainment = randomEntertainmentFunction(entertainmentArray);


// user's current randomly generated trip
console.log("Your trip to " + destination + " via " + transportation + " to enjoy " + entertainment + " and eat at " + restaurant + " is ready!");  //change to alert or remove
alert("Your trip to " + destination + " via " + transportation + " to enjoy " + entertainment + " and eat at " + restaurant + " is ready!");


// function for user's acceptance of current randomly generated trip
function userAcceptTrip() {
    let acceptableTripUserInput = prompt("Is this trip acceptable?", "Yes");

        if(acceptableTripUserInput === "Yes" || "yes") {
            acceptableTripUserInput = true;            
        }
        else {
            acceptableTripUserInput = false;
        }
    return acceptableTripUserInput;
}
userAcceptTrip();

let acceptableTripUserInput;

function confirm (finalizeTrip) {
    finalizeTrip = prompt("Confirm your trip (Yes/No)");
        if(finalizeTrip === "Yes") {
            alert("Your trip to " + destination + " via " + transportation + " to enjoy " + entertainment + " and eat at " + restaurant + " is ready!");
        }
        else if(finalizeTrip === "No") {
            userChanges();
        }
            
        
}

confirm();

//let unacceptableTrip = userChanges();

// let accepted = userAcceptTrip()



// function for user changes
function userChanges() {
    let userChangesInput = prompt("Do you want to change the destination, transportation, entertainment, or restaurant?")
    let userOptions = ["destination", "transportation", "entertainment", "restaurant"];

        if(userChangesInput = userOptions[0]) {
            return destination;
        }
        else if(userChangesInput = userOptions[1]) {
            return transportation;
        }
        else if(userChangesInput = userOptions[2]) {
            return entertainment;
        }
        else if(userChangesInput = userOptions[3]) {
            return restaurant;
        }
}

// userChanges();



// if(acceptableUserInput !== null || "") {
//     console.log("Your trip to " + destination + " via " + transportation + " to enjoy " + entertainment + " and eat at " + restaurant + " is ready!");
// }
//     else if(userInputChanges = prompt("Would you like to change destination, transportation, entertainment, or restaurant?")



// if(userInputChanges !== "destination" || "transportation" || "entertainment" || "restaurant") {
//     console.log("Your trip to " + destination + " via " + transportation + " to enjoy " + entertainment + " and eat at " + restaurant + " is ready!");  //change to alert
// }
//     else if(userInputChanges = "destination") {
//     randomDestinationFunction(destinationArray);
//     }
//     else if(userInputChanges = "transportatation") {
//         randomTransportationFunction(transportatationArray);
//     }
//     else if(userInputChanges = "entertainment") {
//         randomEntertainmentFunction(entertainmentArray);
//     }
//     else if(userInputChanges = "restaurant") {
//         randomRestaurantFunction(restaurantArray);
//     }
