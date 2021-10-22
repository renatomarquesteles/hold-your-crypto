import React, { Dispatch, SetStateAction } from 'react';
import { Text } from 'react-native';

import { ModalOutlinedButton } from '../../../components/ModalButtons/Outlined';
import { ModalPrimaryButton } from '../../../components/ModalButtons/Primary';

import { Container } from './styles';

interface Props {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const NewTransaction = ({ setIsModalOpen }: Props) => {
  return (
    <Container>
      <Text>Teste</Text>
      <ModalPrimaryButton>SALVAR</ModalPrimaryButton>
      <ModalOutlinedButton onPress={() => setIsModalOpen(false)}>
        Cancelar
      </ModalOutlinedButton>
    </Container>
  );
};
