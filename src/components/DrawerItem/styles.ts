import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

import { theme } from '../../styles/theme';

export const Container = styled.View`
  border: 1px solid ${theme.colors.border};
`;

export const Item = styled(RectButton)`
  height: 60px;
  padding: 0 24px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  margin-left: 13px;
  font-family: ${theme.fonts.text400};
  font-size: 18px;
  color: ${theme.colors.primaryDark};
`;
