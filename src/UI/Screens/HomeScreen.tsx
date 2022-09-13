import React, {useMemo} from 'react';
import {useQuery} from 'react-query';
import styled from 'styled-components/native';
import useIndice from '../../hooks/useIndice';
import fetch_weather from '../../repositories/open-weather-api/queries/fetch-weather';
import {Footer, Header} from '../Components';

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

const HomeScreen: React.FC = () => {
  // MATANE
  const lat = '48.7961337';
  const long = '-67.5527661';
  const {data, isLoading} = useQuery(['weather', lat, long], () =>
    fetch_weather(lat, long),
  );

  const indice = useIndice(data?.data);
  const cityName = useMemo(() => data?.data.name ?? '', [data]);

  return (
    <ScreenContainer>
      {isLoading ? (
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
