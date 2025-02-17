const apiKey = "3f9953617c2f1c572535495bf873fd32";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none"
    } 
    else {
        var data = await response.json();

    console.log(data);

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".windy").innerHTML = data.wind.speed + " km/h";

if (data.weather[0].main == "Clouds") {
    weatherIcon.src="cloudy.png";
}

else if(data.weather[0].main == "Mist") {
    weatherIcon.src="mist.png";
}

else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src="drizzle.jpg";
}

else if (data.weather[0].main == "Rain") {
    weatherIcon.src="rainy.jpg";
}

else if (data.weather[0].main == "Snow") {
    weatherIcon.src="snow.avif";
}

else if (data.weather[0].main == "Clear") {
    weatherIcon.src="sunny.png";
}

document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";

}

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

checkWeather(city);

