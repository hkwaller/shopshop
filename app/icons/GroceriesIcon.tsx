import * as React from 'react'
import Svg, { G, Path, Rect } from 'react-native-svg'

type Props = {
  color: string
  size: number
}

function GroceriesIcon({ color, size }: Props) {
  return (
    <Svg width={size * 1.1} height={size} viewBox={`0 0 35 28`}>
      <G
        transform="translate(1 1)"
        strokeWidth={1.8}
        fill="none"
        fillRule="evenodd"
      >
        <Path
          stroke={color}
          strokeLinecap="square"
          d="M11.5 22.5h21M11.5 12.5h21M11.5 2.5h21"
        />
        <Rect stroke={color} width={6} height={6} rx={1} />
        <Rect stroke={color} y={10} width={6} height={6} rx={1} />
        <Rect stroke={color} y={20} width={6} height={6} rx={1} />
      </G>
    </Svg>
  )
}

export default GroceriesIcon
