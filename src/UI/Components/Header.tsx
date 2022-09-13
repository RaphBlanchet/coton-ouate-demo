import React from 'react';
import styled from 'styled-components/native';

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

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>Fais-tu frette?</Title>
      <Subtitle>T'es-tu ben dans ton coton ouaté?</Subtitle>
    </HeaderContainer>
  );
};

export default Header;
