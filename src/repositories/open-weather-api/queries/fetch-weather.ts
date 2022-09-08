import API from '../api';

type WeatherResponse = {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  rain: {
    '1h': number;
  };
};

export default function fetch_weather(lat: string, lon: string) {
  return API.get<WeatherResponse>('/weather', {
    params: {lat, lon},
  });
}
