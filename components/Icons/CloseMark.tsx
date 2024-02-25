import { memo } from "react"
import styled from "styled-components"
import { IconColors, IconProps, IconSizes } from "./types/IconProps"

const Svg = styled.svg`
  width: 16px;
  height: 16px;

  &.size-small {
    width: 15px;
  height: 15px;
  }
`

const CloseMark = (props: IconProps) => {
  const { color = IconColors.default, size = IconSizes.default } = props
  return (
    <Svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`size-${size}`}
    >
      <g clip-path="url(#clip0_514_5012)">
        <path
          d="M1.00953 15.7473C1.35133 16.0794 1.91774 16.0794 2.24977 15.7473L8.49977 9.49732L14.7497 15.7473C15.0818 16.0794 15.6579 16.0891 15.99 15.7473C16.322 15.4055 16.322 14.8489 15.99 14.5169L9.74001 8.25709L15.99 2.00709C16.322 1.67506 16.3318 1.10866 15.99 0.776624C15.6482 0.434827 15.0818 0.434827 14.7497 0.776624L8.49977 7.02662L2.24977 0.776624C1.91774 0.434827 1.34157 0.425062 1.00953 0.776624C0.677503 1.11842 0.677503 1.67506 1.00953 2.00709L7.25954 8.25709L1.00953 14.5169C0.677503 14.8489 0.667738 15.4153 1.00953 15.7473Z"
          fill={color}
          fill-opacity="0.85"
        />
      </g>
      <defs>
        <clipPath id="clip0_514_5012">
          <rect
            width="15.4859"
            height="15.4956"
            fill={color}
            transform="translate(0.756836 0.504395)"
          />
        </clipPath>
      </defs>
    </Svg>
  )
}

export default memo(CloseMark)
