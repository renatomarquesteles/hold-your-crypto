import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export default function BTC_Logo(props: SvgProps) {
  return (
    <Svg width={40} height={40} fill="none" {...props}>
      <Path
        d="M39.4 24.84C36.73 35.553 25.876 42.074 15.16 39.4 4.444 36.726-2.074 25.878.6 15.164 3.274 4.448 14.122-2.075 24.836.6 35.55 3.274 42.074 14.123 39.4 24.84z"
        fill="#F7931A"
      />
      <Path
        d="M28.82 17.15c.398-2.66-1.629-4.092-4.4-5.046l.9-3.605-2.195-.547-.877 3.51a86.425 86.425 0 00-1.757-.413l.88-3.534-2.193-.546-.898 3.603-4.426-1.096-.584 2.344s1.628.373 1.594.396c.889.222 1.05.81 1.023 1.277l-2.463 9.876c-.109.27-.385.675-1.006.52.022.032-1.595-.4-1.595-.4l-1.09 2.516 4.42 1.116-.908 3.647 2.192.546.9-3.607c.6.162 1.18.312 1.748.453l-.896 3.591 2.195.547.908-3.64c3.743.708 6.557.422 7.74-2.96.954-2.725-.047-4.297-2.016-5.323 1.434-.332 2.514-1.274 2.802-3.223l.002-.001zm-5.016 7.032c-.68 2.725-5.267 1.253-6.755.883l1.205-4.831c1.488.371 6.258 1.106 5.551 3.948zm.681-7.07c-.619 2.48-4.438 1.22-5.678.91l1.091-4.382c1.24.31 5.23.886 4.585 3.472"
        fill="#fff"
      />
    </Svg>
  );
}