export function renderWeather(data) {
  const output = document.querySelector('#weather-output');
  if (!output) return;

  const city = data.name;
  const temp = Math.round(data.main.temp);
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;

  output.innerHTML = `
    <h2>${city}</h2>
    <p>${temp} °C</p>
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
    <p>${description}</p>
  `;
}
