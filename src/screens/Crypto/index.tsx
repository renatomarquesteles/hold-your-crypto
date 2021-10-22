import React from 'react';
import { FlatList, View } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';

import { CryptoLogo } from '../../components/CryptoLogo';
import currenciesData from '../../mocks/currenciesData';
import transactions from '../../mocks/transactions';
import { RootDrawerParamList } from '../../routes/Crypto.routes';
import { formatCurrencyToBRL } from '../../utils/formatCurrencyToBRL';

import {
  BalancesContainer,
  BTCTotal,
  CoinInfo,
  Description,
  ListContainer,
  Profit,
  Quote,
  QuoteValue,
  Text,
  Total,
  TransactionContainer,
  TransactionDate,
} from './styles';

type Props = DrawerScreenProps<RootDrawerParamList, 'Crypto'>;

export const Crypto = ({ route }: Props) => {
  const { currency } = route.params;
  const data = currenciesData.data[currency];

  return (
    <>
      <CoinInfo>
        <CryptoLogo symbol={currency} size={48} />
        <Quote>Cotação do dia</Quote>
        <QuoteValue>{formatCurrencyToBRL(data.quote.BRL.price)}</QuoteValue>
      </CoinInfo>

      <BalancesContainer>
        <Total>{formatCurrencyToBRL(37783.62)}</Total>
        <BTCTotal>1.000668 BTC</BTCTotal>
      </BalancesContainer>

      <ListContainer>
        <FlatList
          data={transactions}
          renderItem={({ item }) => (
            <>
              <TransactionDate>{item.date}</TransactionDate>
              <TransactionContainer>
                <View>
                  <Description>
                    {item.transaction_currency + '->' + item.currency}
                  </Description>

                  <Text>
                    Aporte: {formatCurrencyToBRL(item.transaction_value)}
                  </Text>
                  <Text>
                    Cotação do dia: {formatCurrencyToBRL(item.quote_value)}
                  </Text>
                  <Text>
                    Valor atual:{' '}
                    {formatCurrencyToBRL(item.amount * data.quote.BRL.price)}
                  </Text>
                </View>

                <Profit
                  value={
                    item.amount * data.quote.BRL.price -
                    item.amount * item.quote_value
                  }
                >
                  {formatCurrencyToBRL(
                    item.amount * data.quote.BRL.price -
                      item.amount * item.quote_value
                  )}
                </Profit>
              </TransactionContainer>
            </>
          )}
          keyExtractor={(item) => item.id}
        />
      </ListContainer>
    </>
  );
};
