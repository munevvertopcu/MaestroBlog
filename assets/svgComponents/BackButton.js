import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function BackButton(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      viewBox="0 0 28 28"
      {...props}
    >
      <G data-name="Group 1158" transform="translate(-19 -50)">
        <Circle
          data-name="Ellipse 129"
          cx={14}
          cy={14}
          r={14}
          transform="translate(19 50)"
          fill="grey"
        />
        <Path
          data-name="Path 64781"
          d="M35.644 55.978l-7.63 7.63 7.63 7.63"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth={1}
        />
      </G>
    </Svg>
  )
}

export default BackButton;
