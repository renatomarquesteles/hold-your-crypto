import React from 'react';
import { FlatList, View } from 'react-native';
import { CryptoLogo } from '../../components/CryptoLogo';

import { Header } from '../../components/Header';
import { IconButton } from '../../components/IconButton';
import { PrimaryButton } from '../../components/PrimaryButton';

import {
  BalancesContainer,
  BTCBalance,
  ButtonContainer,
  CryptoName,
  HeaderContainer,
  ListContainer,
  ListItem,
  ListItemInfo,
  ListItemText,
  ListItemSmallText,
  ListItemValues,
  ScreenContent,
  Title,
  TotalBalance,
} from './styles';

export const Overview = () => {
  const balances = [
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      amount: 1.00668415,
      value: 37783.62,
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      amount: 2.15947,
      value: 5028.36,
    },
    {
      symbol: 'ADA',
      name: 'Cardano',
      amount: 10.48,
      value: 20.33,
    },
  ];

  return (
    <View>
      <Header>
        <HeaderContainer>
          <IconButton name="menu" />

          <Title>Hold Your Crypto</Title>

          <IconButton name="user" />
        </HeaderContainer>
      </Header>

      <ScreenContent>
        <BalancesContainer>
          <TotalBalance>$42,833.09</TotalBalance>
          <BTCBalance>1.00668 BTC</BTCBalance>
        </BalancesContainer>

        <ListContainer>
          <FlatList
            data={balances}
            renderItem={({ item }) => (
              <ListItem>
                <ListItemInfo>
                  <CryptoLogo symbol={item.symbol} />

                  <CryptoName>{item.name}</CryptoName>
                </ListItemInfo>

                <ListItemValues>
                  <ListItemText>
                    {item.amount} {item.symbol}
                  </ListItemText>

                  <ListItemSmallText>${item.value}</ListItemSmallText>
                </ListItemValues>
              </ListItem>
            )}
            keyExtractor={(item) => item.name}
          />
        </ListContainer>

        <ButtonContainer>
          <PrimaryButton>Selecionar Criptomoeda</PrimaryButton>
        </ButtonContainer>
      </ScreenContent>
    </View>
  );
};
