import styled from 'styled-components/native';

import { theme } from '../../../styles/theme';

export const Container = styled.View`
  flex-grow: 1;
`;

export const Label = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 16px;
  color: ${theme.colors.primaryDark};
`;

export const Input = styled.TextInput`
  height: 38px;
  padding: 0 12px;
  border: 1px solid ${theme.colors.primary};
  border-radius: 4px;
  font-size: 14px;
`;
