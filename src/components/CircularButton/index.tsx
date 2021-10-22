import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { theme } from '../../styles/theme';

import { Button } from './styles';

interface Props extends TouchableOpacityProps {
  name: keyof typeof Feather.glyphMap;
  color?: keyof typeof theme.colors;
  size?: number;
}

export const CircularButton = ({
  name,
  color = 'primary',
  size = 32,
  ...rest
}: Props) => {
  return (
    <Button color={color} size={size} activeOpacity={0.9} {...rest}>
      <Feather name={name} size={size} color={theme.colors.white} />
    </Button>
  );
};
