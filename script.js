// date and time
let now = new Date();
let currentDay = document.querySelector("#day");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
currentDay.innerHTML = day;

let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
hours.innerHTML = now.getHours();
minutes.innerHTML = now.getMinutes();

let date = document.querySelector("#date");
date.innerHTML = now.getDate();

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let month = document.querySelector("#month");
month.innerHTML = months[now.getMonth()];

// current position weather

let currentB = document.querySelector("#current-button");
currentB.addEventListener("click", currentPositionWeather);

function currentPositionWeather() {
  function displayTemp(response) {
    let temperature = Math.round(response.data.main.temp);
    currentCity.innerHTML = response.data.name;
    temp.innerHTML = temperature;
  }

  function getPosition(position) {
    let key = "3818ef8d96aa3cbe7d3ceb323fd21a5c";
    let long = position.coords.longitude;
    let lat = position.coords.latitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${key}`;
    axios.get(url).then(displayTemp);
  }

  navigator.geolocation.getCurrentPosition(getPosition);
}

// search engine & weather

let form = document.querySelector("#form");

let currentCity = document.querySelector("#current-city");
let temp = document.querySelector("#day-temp");
let sky = document.querySelector("#sky");
let rain = document.querySelector("#rain");
let wind = document.querySelector("#wind");
let icon = document.querySelector("#weather-icon");

function displayWeather(response) {
  celsiusTemp = response.data.main.temp;
  temp.innerHTML = Math.round(celsiusTemp);
  currentCity.innerHTML = response.data.name;
  rain.innerHTML = response.data.main.humidity;
  wind.innerHTML = Math.round(response.data.wind.speed);
  sky.innerHTML = response.data.weather[0].description;
  icon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function search(city) {
  let apiKey = "3818ef8d96aa3cbe7d3ceb323fd21a5c";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(displayWeather);
}

function pressSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#input-city");
  search(cityInput.value);
}

form.addEventListener("submit", pressSubmit);

// fahrenheit - celsius

function displayFahrenheit() {
  event.preventDefault();
  fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
  temp.innerHTML = Math.round(fahrenheitTemp);
}

function displayCelsius() {
  temp.innerHTML = Math.round(celsiusTemp);
}

let celsiusTemp = null;

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", displayFahrenheit);

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", displayCelsius);

search("Kyiv");

// degrees
// let celsius = document.querySelector("#celsius");
// let fahrenheit = document.querySelector("#fahrenheit");
// let dayTemp = document.querySelector("#day-temp");
// let nightTemp = document.querySelector("#night-temp");

// function convertC() {
//   event.preventDefault();
//   dayTemp.innerHTML = 25;
//   nightTemp.innerHTML = 20;
// }

// function convertF() {
//   event.preventDefault();
//   dayTemp.innerHTML = 77;
//   nightTemp.innerHTML = 68;
// }

// celsius.addEventListener("click", convertC);
// fahrenheit.addEventListener("click", convertF);

// let weather = {
//   paris: {
//     temp: 19.7,
//     humidity: 80,
//   },
//   tokyo: {
//     temp: 17.3,
//     humidity: 50,
//   },
//   lisbon: {
//     temp: 30.2,
//     humidity: 20,
//   },
//   "san francisco": {
//     temp: 20.9,
//     humidity: 100,
//   },
//   moscow: {
//     temp: -5,
//     humidity: 20,
//   },
// };

// // end of object

// let city = prompt("Choose the city");
// city = city.trim().toLowerCase();
// const cityC = city.charAt(0).toUpperCase() + city.slice(1);

// function findCity() {
//   if (city === "paris") {
//     alert(
//       `It is currently ${Math.round(weather.paris.temp)}°C (${
//         Math.round(weather.paris.temp) * 1.8 + 32
//       }°F) in ${cityC} with a humidity of ${weather.paris.humidity} percent.`
//     );
//   } else if (city === "tokyo") {
//     alert(
//       `It is currently ${Math.round(weather.tokyo.temp)}°C (${
//         Math.round(weather.paris.temp) * 1.8 + 32
//       }°F) in ${cityC} with a humidity of ${weather.tokyo.humidity} percent.`
//     );
//   } else if (city === "lisbon") {
//     alert(
//       `It is currently ${Math.round(weather.lisbon.temp)}°C (${
//         Math.round(weather.lisbon.temp) * 1.8 + 32
//       }°F) in ${cityC} with a humidity of ${weather.lisbon.humidity}%.`
//     );
//   } else if (city === "san francisco") {
//     alert(
//       `It is currently ${Math.round(weather["san francisco"].temp)}°C (${
//         Math.round(weather["san francisco"].temp) * 1.8 + 32
//       }°F) in San Francisco with a humidity of ${
//         weather["san francisco"].humidity
//       }%.`
//     );
//   } else if (city === "moscow") {
//     alert(
//       `It is currently ${Math.round(weather.moscow.temp)}°C (${
//         Math.round(weather.moscow.temp) * 1.8 + 32
//       }°F) in ${cityC} with a humidity of ${weather.moscow.humidity}%.`
//     );
//   } else {
//     alert(
//       "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+" +
//         city
//     );
//   }
// }

// if (city === "") {
//   alert("You haven't entered any city. Reload the page to choose one.");
// } else {
//   findCity();
// }
