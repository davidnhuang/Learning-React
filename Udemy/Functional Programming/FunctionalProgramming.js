var weather = [72,84,34,56,24]
var goOutside = []

// Thru our list in weather, if the value is greater than 70, push into goOutsidep[]
for (var i=0; i < weather.length; i++) {
    if (weather[i] > 70) {
        goOutside.push(weather[i])
    }
}

// or
goOutside2 = weather.filter(function(temp){
    return temp > 70
});

var forecast = [
    {day: "Monday", sun: true, humidity: 80},
    {day: "Tuesday", sun: false, humidity: 18},
    {day: "Wednesday", sun: true, humidity: 20},
];

// Push
// Store all sunny day's here
var sunnyDays = []

for (var i = 0; i < forecast.length; i++) {
    if (forecast[i].sun) {
        sunnyDays.push(forecast[i])
    }
}

// or using filter
var sunnyDays2 = forecast.filter(function(weather) {
    return weather.sun
});

// Map
var humidDay = []

for (var i = 0; i < forecast.length; i++) {
    if (forecast[i].humidity) {
        humidDay.push(forecast[i].humidity)
    }
}
//or
var humidDay = forecast.map(function(wetness){
    return wetness.humidity;
}) 

var numbers = [1,2,3,4,5]

var triples = numbers.map(function(int){
    return int*3
})

// More with maps
var values = [1,2,3,4,5,6,7,]

var doublePlusOne = values.map(function(num){
    return num * 2;
}).map(function(num){
    return num + 1
})

var greeting = ["Hello", "Hi", "Howdy"]

var shout = greeting.map(function(greet){
    return greet.toUpperCase()
})

var shoutHello = shout[0]
// or
shouHello = shout.shift();

var whipserShout = shout.map(function(greet){
    return greet.toLowerCase();
})