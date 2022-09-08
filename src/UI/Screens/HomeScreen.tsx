import React, {useMemo} from 'react';
import {useQuery} from 'react-query';
import styled from 'styled-components/native';
import fetch_weather from '../../repositories/open-weather-api/queries/fetch-weather';

const ScreenContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const HeaderContainer = styled.View`
  padding: 8px 0;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: 700;
  color: white;
`;

const Subtitle = styled.Text`
  font-size: 18px;
  color: white;
`;

const LoadingIndicator = styled.ActivityIndicator`
  margin: 16px 0;
`;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Temperature = styled.Text`
  font-weight: 900;
  font-size: 72px;
  color: white;
`;

const HomeScreen: React.FC = () => {
  // MATANE
  const lat = '48.7961337';
  const long = '-67.5527661';
  const {data, isLoading} = useQuery(['weather', lat, long], () =>
    fetch_weather(lat, long),
  );

  const temperature = useMemo(
    () => (data ? Math.round(data?.data.main.temp) : undefined),
    [data],
  );

  return (
    <ScreenContainer>
      <HeaderContainer>
        <Title>Fais-tu frette?</Title>
        <Subtitle>T'es-tu ben dans ton coton ouaté?</Subtitle>
        {isLoading && <LoadingIndicator />}
      </HeaderContainer>
      {data && (
        <Container>
          <Temperature>{temperature}°C</Temperature>
        </Container>
      )}
    </ScreenContainer>
  );
};

export default HomeScreen;
