import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { theme } from '../../styles/theme';

import { Button, Container, Text } from './styles';

interface Props extends RectButtonProps {
  color?: keyof typeof theme.colors;
  children: string;
}

export const OutlinedButton = ({
  color = 'primary',
  children,
  ...rest
}: Props) => {
  return (
    <Container color={color}>
      <Button {...rest}>
        <Text color={color}>{children}</Text>
      </Button>
    </Container>
  );
};
