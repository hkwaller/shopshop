import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function CheckmarkIcon(props) {
  return (
    <Svg
      width={34}
      height={27}
      viewBox="0 0 34 27"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M29.906 1.418c1.097-1.246 2.843.572 1.745 1.819-6.085 7.17-12.22 14.236-18.355 21.353-.3.364-.599.676-.898 1.04-.449.52-1.297.467-1.746 0-3.092-3.066-6.185-6.183-9.277-9.248-1.147-1.143.598-3.014 1.746-1.819 2.793 2.754 5.536 5.507 8.33 8.313 6.184-7.17 12.32-14.288 18.455-21.458z"
        fill="#000"
        fillRule="nonzero"
        stroke="#000"
        strokeWidth={2}
      />
    </Svg>
  )
}

export default CheckmarkIcon
