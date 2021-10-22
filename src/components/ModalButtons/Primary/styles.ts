import styled from 'styled-components/native';

import { theme } from '../../../styles/theme';

interface IButton {
  color: keyof typeof theme.colors;
}

export const Button = styled.Pressable<IButton>`
  height: 38px;
  background: ${({ color }) => theme.colors[color]};
  border-radius: 4px;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: ${theme.colors.white};
  text-align: center;
`;
