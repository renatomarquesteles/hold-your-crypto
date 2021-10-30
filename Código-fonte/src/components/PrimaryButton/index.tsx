import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { theme } from '../../styles/theme';

import { Button, Text } from './styles';

interface Props extends RectButtonProps {
  color?: keyof typeof theme.colors;
  children: string;
}

export const PrimaryButton = ({
  color = 'primary',
  children,
  ...rest
}: Props) => {
  return (
    <Button color={color} {...rest}>
      <Text>{children}</Text>
    </Button>
  );
};
