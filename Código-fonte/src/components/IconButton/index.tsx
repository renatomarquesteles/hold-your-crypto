import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { theme } from '../../styles/theme';

interface Props extends TouchableOpacityProps {
  name: keyof typeof Feather.glyphMap;
  color?: keyof typeof theme.colors;
  size?: number;
}

export const IconButton = ({
  name,
  color = 'primary',
  size = 24,
  ...rest
}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.5} {...rest}>
      <Feather name={name} size={size} color={theme.colors[color]} />
    </TouchableOpacity>
  );
};
