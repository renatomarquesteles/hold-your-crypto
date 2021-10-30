import React from 'react';
import { PressableProps } from 'react-native';

import { theme } from '../../../styles/theme';

import { Button, Text } from './styles';

interface Props extends PressableProps {
  color?: keyof typeof theme.colors;
  children: string;
}

export const ModalPrimaryButton = ({
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
