import { test, expect } from 'vitest';
import { fetchWeather } from '../src/api.js';


import { fetchWeather } from '../src/api';

test('fetchWeather returns data for valid city', async () => {
  const data = await fetchWeather('London');
  expect(data.name).toBe('London');
});

test('fetchWeather returns null for invalid city', async () => {
  const data = await fetchWeather('asdkjhsdkjh'); // random név
  expect(data).toBeNull();
});

test('fetchWeather returns null for empty city name', async () => {
  const data = await fetchWeather('');
  expect(data).toBeNull();
});

