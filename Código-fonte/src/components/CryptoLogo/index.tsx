import React from 'react';

import ADA_Logo from '../../assets/ADA_Logo';
import BTC_Logo from '../../assets/BTC_Logo';
import ETH_Logo from '../../assets/ETH_Logo';

interface Props {
  symbol: string;
  size?: number;
}

export const CryptoLogo = ({ symbol, size = 40 }: Props) => {
  switch (symbol) {
    case 'BTC':
      return <BTC_Logo width={size} height={size} />;
    case 'ETH':
      return <ETH_Logo width={size} height={size} />;
    case 'ADA':
      return <ADA_Logo width={size} height={size} />;
  }

  return null;
};
