import axios from 'axios';
import {OPEN_WEATHER_API_KEY} from '@env';

const OpenWeatherAPI = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

OpenWeatherAPI.interceptors.request.use(async request => {
  if (request.url === '/auth') {
    return request;
  }

  request.params = {
    ...request.params,
    appid: OPEN_WEATHER_API_KEY,
    units: 'metric',
  };

  return request;
});

export default OpenWeatherAPI;
