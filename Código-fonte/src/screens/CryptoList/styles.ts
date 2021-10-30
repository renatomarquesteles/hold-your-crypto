import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

export const Header = styled.View`
  padding: 22px 24px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.text600};
  font-size: 20px;
  color: ${theme.colors.primary};
`;

export const Footer = styled.View`
  padding: 22px 24px;
`;
