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

console.log("Your trip to " + destination + " via " + transportation + " to enjoy " + entertainment + " and eat at " + restaurant + " is ready!");