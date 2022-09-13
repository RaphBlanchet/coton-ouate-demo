import React from 'react';
import styled from 'styled-components/native';
import Icon from './Icon';

const HeaderContainer = styled.View`
  flex-direction: row;
  padding: 8px 0;
  justify-content: center;
  align-items: center;
`;

const City = styled.Text`
  font-weight: 700;
  font-size: 22px;
  color: white;
  margin-left: 8px;
`;

type HeaderProps = {
  city: string;
};

const Header: React.FC<HeaderProps> = ({city}) => {
  return (
    <HeaderContainer>
      <Icon name="location_pin" size={18} tintColor="white" />
      <City>{city}</City>
    </HeaderContainer>
  );
};

export default Header;
