const weatherCity = document.getElementById("search-city");
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const weatherImg = document.getElementById("weather-img");
const weatherDescription = document.getElementById("weather-description");

const weatherApiKeys = "08cc75873b9653a0e2aa46d782d7e7b4";
document.getElementById("weather-search").addEventListener("click", function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+weatherCity.value+"&appid="+weatherApiKeys+"")
    .then(res => res.json())
    .then(data => {
        city.innerText = `${data.name}, ${data.sys.country}  `;
        temp.innerText = Math.floor(data.main.temp - 273.15)+"° C";
        weatherDescription.innerText = data.weather[0].description;
        console.log(data);
        
    })
    .catch(error => console.log(error))
})
