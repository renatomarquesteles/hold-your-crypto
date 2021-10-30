import React, { ReactNode } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Item, Title } from './styles';

interface Props extends RectButtonProps {
  title: string;
  icon: ReactNode;
}

export const DrawerItem = ({ title, icon, ...rest }: Props) => {
  return (
    <Container>
      <Item {...rest}>
        {icon}
        <Title>{title}</Title>
      </Item>
    </Container>
  );
};
