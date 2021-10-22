import styled from 'styled-components/native';

import { theme } from '../../../styles/theme';

interface Props {
  color: keyof typeof theme.colors;
}

export const Container = styled.View<Props>`
  border: 1px solid ${({ color }) => theme.colors[color]};
  border-radius: 4px;
`;

export const Button = styled.Pressable`
  height: 38px;
  background: transparent;
  border-radius: 4px;
  justify-content: center;
`;

export const Text = styled.Text<Props>`
  font-size: 18px;
  color: ${({ color }) => theme.colors[color]};
  text-align: center;
`;
