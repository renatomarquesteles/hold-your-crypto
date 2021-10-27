import React, { Dispatch, SetStateAction, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import { ModalOutlinedButton } from '../../../components/ModalButtons/Outlined';
import { ModalPrimaryButton } from '../../../components/ModalButtons/Primary';
import { TextInput } from '../../../components/Inputs/TextInput';
import { Transaction } from '../../../constants/interfaces';

import {
  ButtonContainer,
  Container,
  InputGroup,
  Separator,
  Text,
  Title,
  ValuesContainer,
} from './styles';

interface Props {
  currency: string;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setTransactions: Dispatch<SetStateAction<Transaction[]>>;
}

export const NewTransaction = ({
  currency,
  setIsModalOpen,
  setTransactions,
}: Props) => {
  const [date, setDate] = useState('');
  const [quoteCurrency, setQuoteCurrency] = useState('BRL');
  const [quoteValue, setQuoteValue] = useState('');
  const [transactionCurrency, setTransactionCurrency] = useState(currency);
  const [transactionValue, setTransactionValue] = useState('');
  const [feeCurrency, setFeeCurrency] = useState('BRL');
  const [feeValue, setFeeValue] = useState('');

  const saveTransaction = async () => {
    const newTransaction = {
      id: uuid.v4(),
      date: date,
      amount: +transactionValue / +quoteValue,
      currency: currency,
      quote_value: +quoteValue,
      transaction_currency: transactionCurrency,
      transaction_value: +transactionValue,
    };

    const response = await AsyncStorage.getItem(`transactions-${currency}`);
    const storage = response ? JSON.parse(response) : [];

    const newTransactions = [...storage, newTransaction];

    await AsyncStorage.setItem(
      `transactions-${currency}`,
      JSON.stringify(newTransactions)
    );

    setTransactions(newTransactions);
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Title>Cadastrar Novo Investimento</Title>

      <InputGroup>
        <TextInput
          label="Data*"
          value={date}
          setValue={setDate}
          placeholder="____ /____ /____"
        />
      </InputGroup>

      <InputGroup>
        <Text>Cotação da moeda</Text>
        <ValuesContainer>
          <TextInput
            label="Moeda*"
            value={quoteCurrency}
            setValue={setQuoteCurrency}
            keyboardType="decimal-pad"
          />
          <Separator />
          <TextInput
            label="Valor*"
            value={quoteValue}
            setValue={setQuoteValue}
            placeholder="0,00"
          />
        </ValuesContainer>
      </InputGroup>

      <InputGroup>
        <Text>Valor da Transação</Text>
        <ValuesContainer>
          <TextInput
            label="Moeda*"
            value={transactionCurrency}
            setValue={setTransactionCurrency}
            keyboardType="decimal-pad"
          />
          <Separator />
          <TextInput
            label="Valor*"
            value={transactionValue}
            setValue={setTransactionValue}
            placeholder="0,00"
          />
        </ValuesContainer>
      </InputGroup>

      <InputGroup>
        <Text>Taxa da Transação</Text>
        <ValuesContainer>
          <TextInput
            label="Moeda"
            value={feeCurrency}
            setValue={setFeeCurrency}
            keyboardType="decimal-pad"
          />
          <Separator />
          <TextInput
            label="Valor"
            value={feeValue}
            setValue={setFeeValue}
            placeholder="0,00"
          />
        </ValuesContainer>
      </InputGroup>

      <ButtonContainer>
        <ModalPrimaryButton onPress={() => saveTransaction()}>
          SALVAR
        </ModalPrimaryButton>
      </ButtonContainer>

      <ButtonContainer>
        <ModalOutlinedButton onPress={() => setIsModalOpen(false)}>
          Cancelar
        </ModalOutlinedButton>
      </ButtonContainer>
    </Container>
  );
};
