import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import Modal from 'react-native-modal';
import { DrawerScreenProps } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { CryptoLogo } from '../../components/CryptoLogo';
import { CircularButton } from '../../components/CircularButton';
import { Transaction } from '../../constants/interfaces';
import currenciesData from '../../mocks/currenciesData';
import { NewTransaction } from '../Modals/NewTransaction';
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const { currency } = route.params;
  const data = currenciesData.data[currency];

  useEffect(() => {
    const loadStorage = async () => {
      const response = await AsyncStorage.getItem(`transactions-${currency}`);
      const storage = response ? JSON.parse(response) : [];

      setTransactions(storage);
    };

    loadStorage();
  }, []);

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

      <CircularButton name="plus" onPress={() => setIsModalOpen(true)} />

      <Modal
        isVisible={isModalOpen}
        onBackButtonPress={() => setIsModalOpen(false)}
        onBackdropPress={() => setIsModalOpen(false)}
        animationIn="zoomIn"
        animationOut="zoomOut"
      >
        <NewTransaction
          currency={currency}
          setIsModalOpen={setIsModalOpen}
          setTransactions={setTransactions}
        />
      </Modal>
    </>
  );
};
