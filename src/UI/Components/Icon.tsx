import VectorDrawable from '@klarna/react-native-vector-drawable';
import React from 'react';
import {AccessibilityProps, Platform} from 'react-native';
import styled from 'styled-components/native';

type Width = number;
type Height = number;
type SizeTuple = [Width, Height];
type Size = number | SizeTuple;

interface IconProps extends AccessibilityProps {
  size: Size;
  name: string;
  tintColor?: string;
  style?: any;
}

interface IconImageProps {
  size: Size;
}

const IconImage = styled.Image`
  width: ${({size}: IconImageProps) =>
    Array.isArray(size) ? size[0] : size}px;
  height: ${({size}: IconImageProps) =>
    Array.isArray(size) ? size[1] : size}px;
`;

const AndroidIconImage = styled(VectorDrawable)`
  width: ${({size}: IconImageProps) =>
    Array.isArray(size) ? size[0] : size}px;
  height: ${({size}: IconImageProps) =>
    Array.isArray(size) ? size[1] : size}px;
`;

function Icon({name, size, tintColor, style, ...props}: IconProps) {
  if (Platform.OS === 'android') {
    return (
      <AndroidIconImage
        resourceName={name}
        size={size}
        style={[tintColor && {tintColor}, {resizeMode: 'contain'}, style]}
        {...props}
      />
    );
  }

  return (
    <IconImage
      source={{uri: name}}
      size={size}
      style={[tintColor && {tintColor}, {resizeMode: 'contain'}, style]}
      {...(props as any)}
    />
  );
}

export default Icon;
