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
  const [date, setDate] = useState(new Date());
  const [quoteValue, setQuoteValue] = useState('');
  const [transactionValue, setTransactionValue] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

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
        <Pressable
          onPress={() => {
            console.log('clickou');
            setShowDatePicker(true);
          }}
        >
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
              console.log('a');
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
          <TextInput
            label="Valor*"
            value={quoteValue}
            setValue={setQuoteValue}
            placeholder="0,00"
            keyboardType="decimal-pad"
          />
        </ValuesContainer>
      </InputGroup>

      <InputGroup>
        <Text>Valor da Transação</Text>
        <ValuesContainer>
          <View pointerEvents="none">
            <TextInput label="Moeda*" value="BRL" setValue={() => {}} />
          </View>
          <Separator />
          <TextInput
            label="Valor*"
            value={transactionValue}
            setValue={setTransactionValue}
            placeholder="0,00"
            keyboardType="decimal-pad"
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
