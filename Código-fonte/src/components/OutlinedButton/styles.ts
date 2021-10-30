import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { theme } from '../../styles/theme';

interface Props {
  color: keyof typeof theme.colors;
}

export const Container = styled.View<Props>`
  border: 1px solid ${({ color }) => theme.colors[color]};
  border-radius: 16px;
`;

export const Button = styled(RectButton)`
  height: 38px;
  background: transparent;
  border-radius: 16px;
  justify-content: center;
`;

export const Text = styled.Text<Props>`
  font-size: 18px;
  color: ${({ color }) => theme.colors[color]};
  text-align: center;
`;
