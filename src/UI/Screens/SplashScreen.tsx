import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: 800;
  color: white;
`;

const Subtitle = styled.Text`
  font-size: 18px;
  color: white;
`;

export default function SplashScreen() {
  return (
    <Container>
      <Title>Fais-tu frette?</Title>
      <Subtitle>T'es-tu ben dans ton coton ouaté?</Subtitle>
    </Container>
  );
}
