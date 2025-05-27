export function showError(message) {
  const output = document.querySelector('#weather-output');
  if (!output) return;

  output.innerHTML = `
    <p style="color: red;">${message}</p>
  `;
}

export function renderWeather(data) {
console.log("MAIN BETÖLTÖTT");

  const output = document.querySelector('#weather-output');
  if (!output) return;

  const city = data.name;
  const temp = Math.round(data.main.temp);
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;

  output.innerHTML = `
    <div class="bg-blue-50 p-4 rounded-lg shadow-inner">
      <h2 class="text-2xl font-semibold text-blue-700">${city}</h2>
      <p class="text-3xl font-bold mb-2">${temp} °C</p>
      <img class="mx-auto w-20 h-20" src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}" />
      <p class="capitalize text-gray-700">${description}</p>
    </div>
  `;
}

