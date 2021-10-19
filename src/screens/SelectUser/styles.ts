import styled from 'styled-components/native';

import { theme } from '../../styles/theme';

export const Background = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background: ${theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  width: 80%;
  background: ${theme.colors.white};
  border-radius: 6px;
  padding: 20px;
`;

export const Text = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 14px;
  color: ${theme.colors.text};
`;

export const TextContainer = styled.View`
  margin-left: 11px;
  flex-shrink: 1;
`;

export const HighlightText = styled.Text`
  font-size: 14px;
  color: ${theme.colors.secondary};
`;

export const Content = styled.View`
  width: 100%;
  margin-bottom: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonsContainer = styled.View`
  justify-content: space-between;
`;

export const Spacing = styled.View`
  margin: 10px 0;
`;
