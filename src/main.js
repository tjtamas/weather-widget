import { fetchWeather } from './api.js';
import { renderWeather } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#weather-form');
  const input = document.querySelector('#city-input');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = input.value.trim();

    if (city) {
      const data = await fetchWeather(city);
      if (data) {
        renderWeather(data);
      } else {
        alert('Nem sikerült lekérni az időjárást.');
      }
    }
  });
});
