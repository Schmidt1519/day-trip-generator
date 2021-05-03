"use strict";

// arrays for destination, restuarant, transportation, and entertainment options

let destinationArray = ["Denver", "Las Vegas", "Phoenix", "Seattle"];
let restaurantArray = ["Yard House", "Buffalo Wild Wings", "Capital Grille", "Cheesecake Factory"];
let transportationArray = ["car", "airplane", "train", "bus"];
let entertainmentArray = ["a sporting event", "a concert", "hiking", "shopping"];


// functions for generating random destination

function getRandomItem(list) {
    let tripItem = list[Math.floor(Math.random() * list.length)];
            //console.log(randomDestination);
            return tripItem;
}

let destination = getRandomItem(destinationArray);
let restaurant = getRandomItem(restaurantArray);
let transportation = getRandomItem(transportationArray);
let entertainment = getRandomItem(entertainmentArray);


// user's current randomly generated trip
//console.log("Your trip to " + destination + " via " + transportation + " to enjoy " + entertainment + " and eat at " + restaurant + " is ready!");  //change to alert or remove
//alert("Your trip to " + destination + " via " + transportation + " to enjoy " + entertainment + " and eat at " + restaurant + " is ready!");


// function for user's acceptance of current randomly generated trip
function userAcceptTrip() {
    alert("Your trip to " + destination + " via " + transportation + " to enjoy " + entertainment + " and eat at " + restaurant + " is ready!");

    let acceptableTripUserInput = confirm("Is this trip acceptable?");
        return acceptableTripUserInput;
}


// Loop to ask user which item of the trip they would like to change if they did not accept the current trip (userAcceptTrip function)
let continueTripAcceptance = true;

while(continueTripAcceptance) {
    if(userAcceptTrip() === true) {
        confirmTrip();
        continueTripAcceptance = false;
    }
    else {
        userChanges();
    }
}


// Function for user to confirm the trip after first accepting it (userAcceptTrip function)
function confirmTrip () {
        
        console.log("Your trip to " + destination + " via " + transportation + " to enjoy " + entertainment + " and eat at " + restaurant + " is ready!");       
}


// function for user changes to the destination, transportation, entertainment, or restaurant of the trip
function userChanges() {
    let userChangesInput = prompt("Do you want to change the destination, transportation, entertainment, or restaurant?")
    let userOptions = ["destination", "transportation", "entertainment", "restaurant"];

        if(userChangesInput === userOptions[0]) {
            destination = getRandomItem(destinationArray);
            return destination;
        }
        else if(userChangesInput === userOptions[1]) {
            transportation = getRandomItem(transportationArray);
            return transportation;
        }
        else if(userChangesInput === userOptions[2]) {
            entertainment = getRandomItem(entertainmentArray);
            return entertainment;
        }
        else if(userChangesInput === userOptions[3]) {
            restaurant = getRandomItem(restaurantArray);
            return restaurant;
        }
}