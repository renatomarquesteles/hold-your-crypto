import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { theme } from '../../styles/theme';

export const Container = styled.SafeAreaView`
  height: ${getStatusBarHeight() + 58 + 'px'};
  background: ${theme.colors.white};
  border-width: 1px;
  border-style: solid;
  border-color: ${theme.colors.border};
  padding-top: ${getStatusBarHeight() + 'px'};
  justify-content: center;
`;
