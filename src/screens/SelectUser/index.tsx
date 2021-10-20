import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';

import Logo from '../../assets/Logo';
import { PrimaryButton } from '../../components/PrimaryButton';
import { RootStackParamList } from '../../routes';

import {
  Background,
  Container,
  Content,
  HighlightText,
  Spacing,
  Text,
  TextContainer,
} from './styles';

type Props = StackScreenProps<RootStackParamList, 'SelectUser'>;

export const SelectUser = ({ navigation }: Props) => {
  const handleDefaultUserSelect = () => {
    navigation.navigate('OverviewDrawer');
  };

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
          <PrimaryButton onPress={() => handleDefaultUserSelect()}>
            Usuário Padrão
          </PrimaryButton>
        </Spacing>
      </Container>
    </Background>
  );
};
