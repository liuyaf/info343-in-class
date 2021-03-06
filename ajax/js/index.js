// @ts-check
"use strict";

const LOCATION_API = "https://freegeoip.net/json/";
//replace `{latitude}` and `{longitude}`
const WEATHER_API = "http://api.openweathermap.org/data/2.5/weather?units=imperial&APPID=c2072f8cb6d9c7971cff7c662c5940c6&lat={latitude}&lon={longitude}"
//replace {icon}
const ICON_URL = "http://openweathermap.org/img/w/{icon}.png"

const ERROR_ALERT = document.querySelector("#error-alert");

//TODO: fetch from Location API to get lat/lng
//and then fetch Weather API for that lat/lng.
//Render results to the page, or handle errors
function handleError(err) {
    console.error(err);
    ERROR_ALERT.textContent = err.message;
    ERROR_ALERT.classList.remove('d-none');
}

function handleResponse(response) {
    console.log("get response:", response);
    if (response.ok) {
        return response.json();
    } else {
        return response.text().then(function(msg) {
            throw new Error(msg);
        })
    }
}

function fetchWeather(data) {
    console.log(data);
    let lat = data.latitude;
    let lon = data.longitude;
    let url = WEATHER_API.replace("{latitude}", lat).replace("{longitude}", lon);
    return fetch(url);
}

function renderWeather(data) {
    console.log(data);
    let span = document.querySelector("#temp");
    span.textContent = data.main.temp;

    if (data.weather && data.weather[0]) {
        let condition = data.weather[0];
        document.querySelector("#description").textContent = condition.description;
        let img = /**
         * @type {HTMLImageElement}
         */(document.querySelector("#weather-icon"));
        img.src = ICON_URL.replace("{icon}", condition.icon);
        img.alt = condition.description;
    }
}

fetch(LOCATION_API).then(handleResponse).then(fetchWeather).then(handleResponse).then(renderWeather).catch(handleError);

console.log("next line after fetch executes immediately!");