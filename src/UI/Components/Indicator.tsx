import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const Value = styled.Text`
  font-weight: 700;
  font-size: 28px;
  color: white;
`;

const Label = styled.Text`
  font-weight: 500;
  font-size: 16px;
  color: white;
`;

type IndicatorProps = {
  value: string;
  label: string;
};

const Indicator: React.FC<IndicatorProps> = ({value, label}) => {
  return (
    <Container>
      <Value>{value}</Value>
      <Label>{label}</Label>
    </Container>
  );
};

export default Indicator;
