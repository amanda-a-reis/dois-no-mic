import { memo } from "react"
import styled from "styled-components"
import { IconColors, IconProps, IconSizes } from "./types/IconProps"

const Svg = styled.svg`
  width: 10px;
  height: 17px;

  &.size-small {
    width: 6px;
    height: 12px;
  }
`

const ChevronRight = (props: IconProps) => {
  const { color = IconColors.default, size = IconSizes.default } = props
  return (
    <Svg
      width="10"
      height="17"
      viewBox="0 0 10 17"
      xmlns="http://www.w3.org/2000/svg"
      className={`size-${size}`}
    >
      <g clipPath="url(#clip0_273_1194)">
        <path
          d="M9.55078 8.47656C9.55078 8.23242 9.45312 8.00781 9.26758 7.83203L1.5332 0.253906C1.35742 0.0878906 1.14258 0 0.888672 0C0.390625 0 0 0.380859 0 0.888672C0 1.13281 0.0976562 1.35742 0.253906 1.52344L7.36328 8.47656L0.253906 15.4297C0.0976562 15.5957 0 15.8105 0 16.0645C0 16.5723 0.390625 16.9531 0.888672 16.9531C1.14258 16.9531 1.35742 16.8652 1.5332 16.6895L9.26758 9.12109C9.45312 8.93555 9.55078 8.7207 9.55078 8.47656Z"
          fillOpacity="0.85"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_273_1194">
          <rect width="9.55078" height="16.9629" fill={color} />
        </clipPath>
      </defs>
    </Svg>
  )
}

export default memo(ChevronRight)
