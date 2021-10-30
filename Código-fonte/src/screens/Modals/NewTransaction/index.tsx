import React, { Dispatch, SetStateAction, useState } from 'react';
import { Platform, Pressable, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import uuid from 'react-native-uuid';

import { ModalOutlinedButton } from '../../../components/ModalButtons/Outlined';
import { ModalPrimaryButton } from '../../../components/ModalButtons/Primary';
import { TextInput } from '../../../components/Inputs/TextInput';
import { Transaction } from '../../../constants/interfaces';

import {
  ButtonContainer,
  Container,
  CurrencyInput,
  InputGroup,
  Label,
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
  const [date, setDate] = useState(new Date());
  const [quoteValue, setQuoteValue] = useState(0);
  const [transactionValue, setTransactionValue] = useState(0);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const saveTransaction = async () => {
    const newTransaction = {
      id: uuid.v4(), // "314cd1bbd-(...)"
      date: date, // "2021-10-30T03:29:59.515Z"
      amount: transactionValue / quoteValue, // 10
      currency: currency, // "BTC"
      quote_value: quoteValue, // 12
      transaction_currency: 'BRL', // "BRL"
      transaction_value: transactionValue, // 120
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
        <Pressable onPress={() => setShowDatePicker(true)}>
          <View pointerEvents="none">
            <TextInput
              label="Data*"
              value={format(date, 'dd/MM/yyyy')}
              placeholder="____ /____ /____"
            />
          </View>
        </Pressable>

        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            display="default"
            minimumDate={new Date(1950, 0, 1)}
            onChange={(_: Event, selectedDate: Date | undefined) => {
              setShowDatePicker(Platform.OS === 'ios');
              setDate(selectedDate || date);
            }}
          />
        )}
      </InputGroup>

      <InputGroup>
        <Text>Cotação da moeda</Text>
        <ValuesContainer>
          <View pointerEvents="none">
            <TextInput label="Moeda*" value="BRL" setValue={() => {}} />
          </View>
          <Separator />
          <View style={{ flexGrow: 1 }}>
            <Label>Valor*</Label>
            <CurrencyInput
              value={quoteValue}
              onChangeValue={(value) => setQuoteValue(value || 0)}
              delimiter="."
              separator=","
              precision={2}
              placeholder="0,00"
            />
          </View>
        </ValuesContainer>
      </InputGroup>

      <InputGroup>
        <Text>Valor da Transação</Text>
        <ValuesContainer>
          <View pointerEvents="none">
            <TextInput label="Moeda*" value="BRL" setValue={() => {}} />
          </View>
          <Separator />
          <View style={{ flexGrow: 1 }}>
            <Label>Valor*</Label>
            <CurrencyInput
              value={transactionValue}
              onChangeValue={(value) => setTransactionValue(value || 0)}
              delimiter="."
              separator=","
              precision={2}
              placeholder="0,00"
            />
          </View>
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
