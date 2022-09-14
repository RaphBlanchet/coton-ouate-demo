import React, {useEffect, useMemo, useState} from 'react';
import {check, RESULTS} from 'react-native-permissions';
import {useQuery} from 'react-query';
import styled from 'styled-components/native';
import {LocationPermission} from '../../Const';
import useIndice from '../../hooks/useIndice';
import fetch_weather from '../../repositories/open-weather-api/queries/fetch-weather';
import {Footer, Header} from '../Components';
import Geolocation from 'react-native-geolocation-service';

type Location = {
  lat: string;
  lon: string;
};

const ScreenContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LoadingIndicator = styled.ActivityIndicator`
  margin: 16px 0;
`;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Indice = styled.Text`
  font-weight: 900;
  font-size: 128px;
  color: white;
`;

const DEFAULT_LOCATION = {
  lat: '48.7961337',
  lon: '-67.5527661',
};

const HomeScreen: React.FC = () => {
  const [location, setLocation] = useState<Location | null>();

  useEffect(() => {
    async function fetchLocation() {
      const permission = await check(LocationPermission);
      if (permission === RESULTS.GRANTED || permission === RESULTS.LIMITED) {
        Geolocation.getCurrentPosition(position => {
          setLocation({
            lat: String(position.coords.latitude),
            lon: String(position.coords.longitude),
          });
        });
      } else {
        setLocation(DEFAULT_LOCATION);
      }
    }
    fetchLocation();
  }, []);

  const {data, isLoading} = useQuery(
    ['weather', location?.lat, location?.lon],
    () => fetch_weather(location!.lat, location!.lon),
    {enabled: !!location},
  );

  const dataLoading = isLoading || !location;

  const indice = useIndice(data?.data);
  const cityName = useMemo(() => data?.data.name ?? '', [data]);

  return (
    <ScreenContainer>
      {dataLoading ? (
        <LoadingIndicator />
      ) : data ? (
        <>
          <Header city={cityName} />
          <Container>
            <Indice>{indice}</Indice>
          </Container>
          <Footer data={data.data} />
        </>
      ) : null}
    </ScreenContainer>
  );
};

export default HomeScreen;
