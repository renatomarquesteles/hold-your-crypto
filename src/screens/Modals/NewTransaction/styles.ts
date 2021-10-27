import styled from 'styled-components/native';

import { theme } from '../../../styles/theme';

export const Container = styled.View`
  margin: 26px 14px;
  padding: 20px 26px;
  background: ${theme.colors.white};
  border-radius: 6px;
`;

export const ValuesContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputGroup = styled.View`
  margin: 6px 0;
`;

export const Separator = styled.View`
  width: 10px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 17px;
  color: ${theme.colors.primaryDark};
`;

export const Text = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 16px;
  color: ${theme.colors.primaryDark};
`;

export const ButtonContainer = styled.View`
  margin-top: 16px;
`;
