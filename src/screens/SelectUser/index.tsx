import React from 'react';

import Logo from '../../assets/Logo';
import { PrimaryButton } from '../../components/PrimaryButton';

import {
  Background,
  ButtonsContainer,
  Container,
  Content,
  HighlightText,
  Spacing,
  Text,
  TextContainer,
} from './styles';

export const SelectUser = () => {
  return (
    <Background>
      <Container>
        <Content>
          <Logo />

          <TextContainer>
            <Text>
              Acompanhe seus holdings de criptomoedas em um só lugar.{' '}
              <HighlightText>Simples</HighlightText> e{' '}
              <HighlightText>fácil</HighlightText>.
            </Text>
          </TextContainer>
        </Content>

        <Spacing>
          <Text>Selecione o tipo de usuário</Text>
        </Spacing>
        <Spacing>
          <PrimaryButton color="secondaryText" enabled={false}>
            Usuário PREMIUM
          </PrimaryButton>
        </Spacing>
        <Spacing>
          <PrimaryButton>Usuário Padrão</PrimaryButton>
        </Spacing>
      </Container>
    </Background>
  );
};
