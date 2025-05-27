import './style.css';
import * as UI from './ui.js';
import { fetchWeather } from './api.js';



document.addEventListener('DOMContentLoaded', () => {
  
  const form = document.querySelector('#weather-form');
  const input = document.querySelector('#city-input');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = input.value.trim();
    if (city) {
      const data = await fetchWeather(city);
      if (data) {
        
        UI.renderWeather(data);
      } else {
        UI.showError('A megadott város nem található.');
      }
    }
  });
});