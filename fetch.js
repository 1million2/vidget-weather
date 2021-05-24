let div = document.createElement("div"),
	iconWeather = document.createElement("img"),
	p = document.createElement("p"),
	pWind = document.createElement("p");

	pWind.classList.add("wind");
	div.classList.add("weather-widget");

document.body.prepend(div);
div.append(iconWeather, p, pWind)

		
function getWeather(id) {

	
	const url = "http://api.openweathermap.org/data/2.5/weather?id=";
	const apiKey = "9a3403299ab615f42eb0ac912147e942";
	let cityId = id;
	let fullUrl = url + cityId + "&lang=ru" + "&units=metric" + "&appid=" + apiKey;
	let d;
	
	fetch(fullUrl)
		.then(response => response.json())
		.then(data => {
			d = data.weather[0].description;
			let iconUrl = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";

			p.textContent = data.name + ": " + d + ". " + "Температура: " + Math.ceil(data.main.temp) + " c˚";
			pWind.textContent = "Скорость ветра: " + data.wind.speed.toFixed(1) + " м/с";
			iconWeather.setAttribute("src", iconUrl);
		})
		.catch(error => console.log("ошибка: " + error));
		

}


getWeather(625144);