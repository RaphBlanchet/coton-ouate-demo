import {useMemo} from 'react';
import {WeatherData} from '../repositories/open-weather-api/queries/fetch-weather';

const useIndice = (data?: WeatherData) =>
  useMemo(() => {
    if (!data) {
      return undefined;
    }
    const {temp, humidity} = data.main;
    const rain = data.rain ? data.rain['1h'] : 0;

    const tempScore =
      temp > 18
        ? Math.pow(temp - 18, 2) * 1.5
        : temp < 17
        ? Math.pow(temp - 17, 2) * 2.25
        : 0;
    const humidityScore = humidity > 85 ? (humidity - 85) * 3 : 0;
    return rain > 1
      ? 0
      : Math.max(0, Math.round(100 - tempScore - humidityScore));
  }, [data]);

export default useIndice;
