import React, { Dispatch, SetStateAction } from 'react';
import { KeyboardTypeOptions } from 'react-native';

import { Container, Input, Label } from './styles';

interface Props {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
}

export const TextInput = ({
  label,
  value,
  setValue,
  placeholder = '',
  keyboardType = 'default',
}: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </Container>
  );
};
