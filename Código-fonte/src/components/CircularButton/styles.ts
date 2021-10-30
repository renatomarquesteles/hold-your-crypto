import styled from 'styled-components/native';

import { theme } from '../../styles/theme';

interface ButtonProps {
  color: keyof typeof theme.colors;
  size: number;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 30px 20px;
  padding: 10px;
  border-radius: ${({ size }) => size}px;
  background: ${({ color }) => theme.colors[color]};
`;
