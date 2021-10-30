import React, { useEffect, useMemo, useState } from 'react';
import { FlatList } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/core';

import { CryptoLogo } from '../../components/CryptoLogo';
import { PrimaryButton } from '../../components/PrimaryButton';
import { Transaction } from '../../constants/interfaces';
import { RootDrawerParamList } from '../../routes/Overview.routes';
import { getCurrencyQuote } from '../../services/crypto';
import { formatCurrencyToBRL } from '../../utils/formatCurrencyToBRL';

import {
  BalancesContainer,
  ButtonContainer,
  CryptoName,
  ListContainer,
  ListItem,
  ListItemInfo,
  ListItemText,
  ListItemSmallText,
  ListItemValues,
  ScreenContent,
  TotalBalance,
} from './styles';

type Props = DrawerScreenProps<RootDrawerParamList, 'Overview'>;

interface Balance {
  symbol: string;
  name: string;
  amount: number;
  value: number;
}

export const Overview = ({ navigation }: Props) => {
  const [balances, setBalances] = useState<Balance[]>([]);
  const totalValue = useMemo(
    () => balances.reduce((total, current) => total + current.value, 0),
    [balances]
  );
  const isFocused = useIsFocused();

  useEffect(() => {
    console.log('a');
    const loadStorage = async () => {
      const BTCresponse = await AsyncStorage.getItem('transactions-BTC');
      const ETHresponse = await AsyncStorage.getItem('transactions-ETH');
      const ADAresponse = await AsyncStorage.getItem('transactions-ADA');

      const BTCstorage: Transaction[] = BTCresponse
        ? JSON.parse(BTCresponse)
        : [];
      const ETHstorage: Transaction[] = ETHresponse
        ? JSON.parse(ETHresponse)
        : [];
      const ADAstorage: Transaction[] = ADAresponse
        ? JSON.parse(ADAresponse)
        : [];

      const newBalances = [];

      if (BTCstorage.length) {
        const currencyAmount = BTCstorage.reduce(
          (total, current) => total + current.amount,
          0
        );
        const { ticker } = await getCurrencyQuote('BTC');

        newBalances.push({
          symbol: 'BTC',
          name: 'Bitcoin',
          amount: currencyAmount,
          value: currencyAmount * +ticker.last,
        });
      }

      if (ETHstorage.length) {
        const currencyAmount = ETHstorage.reduce(
          (total, current) => total + current.amount,
          0
        );
        const { ticker } = await getCurrencyQuote('ETH');

        newBalances.push({
          symbol: 'ETH',
          name: 'Ethereum',
          amount: currencyAmount,
          value: currencyAmount * +ticker.last,
        });
      }

      if (ADAstorage.length) {
        const currencyAmount = ADAstorage.reduce(
          (total, current) => total + current.amount,
          0
        );
        const { ticker } = await getCurrencyQuote('ADA');

        newBalances.push({
          symbol: 'ADA',
          name: 'Cardano',
          amount: currencyAmount,
          value: currencyAmount * +ticker.last,
        });
      }

      setBalances(newBalances);
    };

    loadStorage();
  }, [isFocused]);

  return (
    <ScreenContent>
      <BalancesContainer>
        <TotalBalance>{formatCurrencyToBRL(totalValue)}</TotalBalance>
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
                  {item.amount.toFixed(6)} {item.symbol}
                </ListItemText>

                <ListItemSmallText>
                  {formatCurrencyToBRL(item.value)}
                </ListItemSmallText>
              </ListItemValues>
            </ListItem>
          )}
          keyExtractor={(item) => item.name}
        />
      </ListContainer>

      <ButtonContainer>
        <PrimaryButton onPress={() => navigation.openDrawer()}>
          Selecionar Criptomoeda
        </PrimaryButton>
      </ButtonContainer>
    </ScreenContent>
  );
};
