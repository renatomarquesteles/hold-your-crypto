import styled from 'styled-components/native';

import { theme } from '../../styles/theme';

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.text400};
`;

export const ScreenContent = styled.View`
  height: 100%;
  background: ${theme.colors.background};
`;

export const BalancesContainer = styled.View`
  margin: 40px 0;
  justify-content: center;
  align-items: center;
`;

export const TotalBalance = styled.Text`
  font-family: ${theme.fonts.text600};
  font-size: 36px;
  color: ${theme.colors.primary};
`;

export const BTCBalance = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 16px;
  color: ${theme.colors.primaryLight};
`;

export const ListContainer = styled.View`
  height: 420px;
`;

export const ListItem = styled.View`
  height: 75px;
  padding: 0 28px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.border};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ListItemInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ListItemValues = styled.View`
  align-items: flex-end;
`;

export const ListItemText = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 16px;
  color: ${theme.colors.text};
`;

export const ListItemSmallText = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 16px;
  color: ${theme.colors.secondaryText};
`;

export const CryptoName = styled(ListItemText)`
  margin-left: 15px;
`;

export const ButtonContainer = styled.View`
  height: 120px;
  padding: 30px 35px;
`;
