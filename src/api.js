// src/api.js

const API_KEY = '636dca5e4f3918eb0e2e5f8c95fb9adf';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function fetchWeather(cityName) {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric&lang=hu`
    );

    if (!response.ok) {
      throw new Error(`Hiba: ${response.status} – ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Nem sikerült lekérni az időjárási adatokat:', error);
    return null;
  }
}
