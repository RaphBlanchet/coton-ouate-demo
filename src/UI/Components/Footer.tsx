import React, {useMemo} from 'react';
import styled from 'styled-components/native';
import {WeatherData} from '../../repositories/open-weather-api/queries/fetch-weather';
import Indicator from './Indicator';

const Container = styled.View`
  flex-direction: row;
`;

const Separator = styled.View`
  background-color: grey;
  width: 2px;
  height: 100%;
`;

type FooterProps = {
  data: WeatherData;
};

const Footer: React.FC<FooterProps> = ({data}) => {
  const temperature = useMemo(() => Math.round(data.main.temp) + '°C', [data]);
  const rain = useMemo(
    () =>
      data.rain
        ? data.rain['1h'] < 1
          ? '< 1mm'
          : Math.round(data.rain['1h']) + 'mm'
        : '-',
    [data],
  );
  const humidity = useMemo(() => data.main.humidity + '%', [data]);

  return (
    <Container>
      <Indicator label="Temp." value={temperature} />
      <Separator />
      <Indicator label="Pluie" value={rain} />
      <Separator />
      <Indicator label="Humidité" value={humidity} />
    </Container>
  );
};

export default Footer;
