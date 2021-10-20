import React from 'react';

import { IconButton } from '../IconButton';
import { Container } from './styles';

type Props = {
  onPress(): void;
};

export const ProfileButton = ({ onPress }: Props) => {
  return (
    <Container>
      <IconButton name="user" onPress={onPress} />
    </Container>
  );
};
