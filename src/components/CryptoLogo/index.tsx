import React from 'react';

import ADA_Logo from '../../assets/ADA_Logo';
import BTC_Logo from '../../assets/BTC_Logo';
import ETH_Logo from '../../assets/ETH_Logo';

interface Props {
  symbol: string;
}

export const CryptoLogo = ({ symbol }: Props) => {
  switch (symbol) {
    case 'BTC':
      return <BTC_Logo />;
    case 'ETH':
      return <ETH_Logo />;
    case 'ADA':
      return <ADA_Logo />;
  }

  return null;
};
