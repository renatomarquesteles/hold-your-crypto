import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export default function Logo(props: SvgProps) {
  return (
    <Svg width={73} height={73} fill="none" {...props}>
      <Path
        d="M23.045 4h26.91L69 23.045v26.91L49.955 69h-26.91L4 49.955v-26.91L23.045 4z"
        stroke="#6D3AD3"
        strokeWidth={8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23.32 53V22.088h5.233v13.44h14.88v-13.44h5.232V53h-5.232V39.56h-14.88V53H23.32z"
        fill="#6D3AD3"
      />
    </Svg>
  );
}
