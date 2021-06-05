let div = document.createElement("div"),
	container = document.createElement("container");
	iconWeather = document.createElement("img"),
	p = document.createElement("p"),
	pWind = document.createElement("p");
	icoLoad = document.createElement("div");

	icoLoad.classList.add("icon");
	pWind.classList.add("wind");
	div.classList.add("weather-widget");
	iconWeather.classList.add("logo-weather");
	container.classList.add("container");

document.body.prepend(div);
div.append(icoLoad);

		
function getWeather(id) {

	
	const url = "http://api.openweathermap.org/data/2.5/weather?id=";
	const apiKey = "9a3403299ab615f42eb0ac912147e942";
	let cityId = id;
	let fullUrl = url + cityId + "&lang=ru" + "&units=metric" + "&appid=" + apiKey;
	let d;

		setTimeout(async() => {
			const f = await fetch(fullUrl);
			const data = await f.json();

			d = data.weather[0].description;
			let iconUrl = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";

			p.textContent = data.name + ": " + d + ". " + "Температура: " + Math.ceil(data.main.feels_like) + " c˚";
			pWind.textContent = "Скорость ветра: " + data.wind.speed.toFixed(1) + " м/с";
			iconWeather.setAttribute("src", iconUrl);
			icoLoad.style.display = "none";
			
			
			container.append(iconWeather, p, pWind);
			div.append(container);
			
			if(data) {
				setTimeout(() => {
					container.classList.add("container-show");
				}, 100);
			}

		}, 2000);
}


getWeather(625144);