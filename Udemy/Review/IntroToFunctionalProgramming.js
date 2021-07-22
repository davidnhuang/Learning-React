// Filter - returns an array - takes in an array, applies a function that returns a boolean, and only returns those that are true
// Filter - 01
var testScore = [92, 87, 54, 63, 75, 59]

var passingTest = function(test) {
    return test > 60; // This code returns a boolean - takes parameter test and checks if it is greater than 60
}

var graduation = testScore.filter(passingTest);

// Filter - 02
var forecast = [
    {day: 'Monday', sun: true},
    {day: 'Tuesday', sun: false},
    {day: 'Wednesday', sun: true},
    {day: 'Thursday', sun: false},
    {day: 'Friday', sun: true},
]

var sunnyDay = forecast.filter(function(weather){
    return weather.sun;
})

// Map - returns an array - takes in an array, applies a function that returns a value, and returns all values to a new array
// Map - 01
var forecast2 = [
    {day: 'Monday', sun: true, humidity: 12},
    {day: 'Tuesday', sun: false, humidity: 80},
    {day: 'Wednesday', sun: true, humidity: 30},
    {day: 'Thursday', sun: false, humidity: 12},
    {day: 'Friday', sun: true, humidity: 15},
]

var humidDay = [] 

// Long way to do it
for (var i = 0; i < forecast2.length; i++) {
    humidDay.push(forecast[i].humidity);
}

// short way to do it
var humid = forecast.map(function(wetness){
    return wetness.humidity
})

// Map - 02
var num = [5, 10, 15, 20, 25]

var triple = num.map(function(n) {
    return n * 3
}) // returns [15, 30, 45, 60, 75]


// Map - 03
var start = [1, 2, 3, 4]

var dub = start.map(function(lists) {
    return lists*2
}).map(function(lists) {
    return lists + 2
})

var greeting = ['hi', 'hello', 'hola'];

var shout = greeting.map(function(phrase) {
    return phrase.toUpperCase()
})