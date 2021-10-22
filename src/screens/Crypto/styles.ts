import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

export const CoinInfo = styled.View`
  width: 100%;
  padding: 16px 0;
  justify-content: center;
  align-items: center;
`;

export const Quote = styled.Text`
  margin-top: 8px;
  font-family: ${theme.fonts.text400};
  font-size: 18px;
  color: ${theme.colors.primaryDark};
`;

export const QuoteValue = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 18px;
  color: ${theme.colors.secondaryText};
`;

export const BalancesContainer = styled.View`
  align-items: center;
`;

export const Total = styled.Text`
  text-align: center;
  font-family: ${theme.fonts.text600};
  font-size: 36px;
  color: ${theme.colors.primary};
`;

export const BTCTotal = styled.Text`
  text-align: center;
  font-family: ${theme.fonts.text400};
  font-size: 16px;
  color: ${theme.colors.primaryLight};
`;

export const ListContainer = styled.View`
  flex: 1;
  margin: 40px 20px;
`;

export const TransactionDate = styled.Text`
  margin: 10px 16px;
  font-family: ${theme.fonts.text600};
  font-size: 14px;
  color: ${theme.colors.secondaryText};
`;

export const TransactionContainer = styled.View`
  width: 100%;
  padding: 12px 20px;
  background: ${theme.colors.white};
  border-width: 2px;
  border-radius: 22px;
  border-color: ${theme.colors.border};
  flex-direction: row;
  justify-content: space-between;
`;

export const Description = styled.Text`
  font-family: ${theme.fonts.text600};
  font-size: 14px;
  color: ${theme.colors.text};
`;

export const Text = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.text};
`;

interface ProfitProps {
  value: number;
}

export const Profit = styled.Text<ProfitProps>`
  font-family: ${theme.fonts.text600};
  font-size: 14px;
  color: ${({ value }) =>
    value > 0 ? theme.colors.success : theme.colors.danger};
`;
