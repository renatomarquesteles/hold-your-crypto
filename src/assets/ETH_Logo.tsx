import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export default function ETH_Logo(props: SvgProps) {
  return (
    <Svg width={40} height={40} fill="none" {...props}>
      <Path
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        fill="#627EEA"
      />
      <Path
        d="M20.622 5v11.087l9.372 4.188L20.622 5z"
        fill="#fff"
        fillOpacity={0.602}
      />
      <Path d="M20.622 5L11.25 20.275l9.372-4.188V5z" fill="#fff" />
      <Path
        d="M20.622 27.46v7.534L30 22.02l-9.378 5.44z"
        fill="#fff"
        fillOpacity={0.602}
      />
      <Path d="M20.622 34.994v-7.535L11.25 22.02l9.372 12.974z" fill="#fff" />
      <Path
        d="M20.622 25.716l9.372-5.441-9.372-4.185v9.626z"
        fill="#fff"
        fillOpacity={0.2}
      />
      <Path
        d="M11.25 20.275l9.372 5.441V16.09l-9.372 4.185z"
        fill="#fff"
        fillOpacity={0.602}
      />
    </Svg>
  );
}
