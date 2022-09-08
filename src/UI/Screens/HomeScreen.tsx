import React from 'react';
import styled from 'styled-components/native';

const ScreenContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
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

const HomeScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <Title>Fais-tu frette?</Title>
      <Subtitle>T'es-tu ben dans ton coton ouaté?</Subtitle>
    </ScreenContainer>
  );
};

export default HomeScreen;
