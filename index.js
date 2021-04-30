"use strict";

// arrays for destination, restuarant, transportation, and entertainment options

let destinationArray = ["Denver", "Las Vegas", "Phoenix", "Seattle"];
let restaurantArray = ["Yard House", "Buffalo Wild Wings", "Capital Grille", "Cheesecake Factory"];
let transportationArray = ["car", "airplane", "train", "bus"];
let entertainmentArray = ["sporting event", "concert", "hiking", "shopping"];

// function for generating random destination

function destinationFunction(destination) {
    let randomDestination = destination[Math.floor(Math.random() * destination.length)];
        console.log(randomDestination);
}

destinationFunction(destinationArray);