import React from 'react';
import { Text } from 'react-native';
import NumberFormat from 'react-number-format';

/**
 * Formata um valor para o formato de moeda BRL (reais)
 */
export const formatCurrencyToBRL = (value: number) => {
  return (
    <NumberFormat
      value={value}
      displayType={'text'}
      thousandSeparator={'.'}
      decimalSeparator=","
      prefix={'R$ '}
      decimalScale={2}
      renderText={(value) => <Text>{value}</Text>}
      fixedDecimalScale
    />
  );
};
