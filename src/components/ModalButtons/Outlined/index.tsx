import React from 'react';
import { PressableProps } from 'react-native';

import { theme } from '../../../styles/theme';

import { Button, Container, Text } from './styles';

interface Props extends PressableProps {
  color?: keyof typeof theme.colors;
  children: string;
}

export const ModalOutlinedButton = ({
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
