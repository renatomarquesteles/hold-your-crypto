import React, { useEffect, useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';
import Modal from 'react-native-modal';
import { DrawerScreenProps } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';

import { CryptoLogo } from '../../components/CryptoLogo';
import { CircularButton } from '../../components/CircularButton';
import { Transaction } from '../../constants/interfaces';
import { NewTransaction } from '../Modals/NewTransaction';
import { RootDrawerParamList } from '../../routes/Crypto.routes';
import { formatCurrencyToBRL } from '../../utils/formatCurrencyToBRL';
import { getCurrencyQuote } from '../../services/crypto';

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
  const [currencyQuote, setCurrencyQuote] = useState(0);
  const currencyAmount = useMemo(
    () => transactions.reduce((total, current) => total + current.amount, 0),
    [transactions]
  );
  const currencyTotal = useMemo(
    () =>
      transactions.reduce(
        (total, current) => total + current.amount * currencyQuote,
        0
      ),
    [transactions, currencyQuote]
  );

  const { currency } = route.params;

  useEffect(() => {
    const loadCurrencyQuote = async () => {
      const response = await getCurrencyQuote(currency);

      if (response) {
        const { ticker } = response;
        setCurrencyQuote(+ticker.last);
      }
    };

    loadCurrencyQuote();
  }, [currency]);

  useEffect(() => {
    const loadStorage = async () => {
      const response = await AsyncStorage.getItem(`transactions-${currency}`);
      const storage = response ? JSON.parse(response) : [];

      setTransactions(storage);
    };

    loadStorage();
  }, [currency]);

  return (
    <>
      <CoinInfo>
        <CryptoLogo symbol={currency} size={48} />
        <Quote>Cotação do dia</Quote>
        <QuoteValue>{formatCurrencyToBRL(currencyQuote)}</QuoteValue>
      </CoinInfo>

      <BalancesContainer>
        <Total>{formatCurrencyToBRL(currencyTotal)}</Total>
        <BTCTotal>{`${currencyAmount.toFixed(6)} ${currency}`}</BTCTotal>
      </BalancesContainer>

      <ListContainer>
        <FlatList
          data={transactions}
          renderItem={({ item }) => (
            <>
              <TransactionDate>
                {format(new Date(item.date), 'dd/MM/yyyy')}
              </TransactionDate>
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
                    {formatCurrencyToBRL(item.amount * currencyQuote)}
                  </Text>
                </View>

                <Profit
                  value={
                    item.amount * currencyQuote - item.amount * item.quote_value
                  }
                >
                  {formatCurrencyToBRL(
                    item.amount * currencyQuote - item.amount * item.quote_value
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
