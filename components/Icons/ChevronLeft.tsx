import { memo } from "react"
import styled from "styled-components"

const Svg = styled.svg`
  width: 10px;
  height: 17px;
  fill: #ffffff;

  &.size-small {
    width: 6px;
    height: 12px;
  }

  &.color-selected {
    fill: #edce74;
  }

  &.color-black {
    fill: #000000;
  }
`

interface Props {
  color?: "selected" | "black"
  size?: "small" | ""
}

const ChevronLeft = (props: Props) => {
  const { color = "", size = "" } = props
  return (
    <Svg
      width="10"
      height="17"
      viewBox="0 0 10 17"
      xmlns="http://www.w3.org/2000/svg"
      className={`color-${color} size-${size}`}
    >
      <g clipPath="url(#clip0_273_1195)">
        <path
          d="M0 8.47656C0 8.7207 0.0878906 8.93555 0.273438 9.12109L8.01758 16.6895C8.18359 16.8652 8.39844 16.9531 8.65234 16.9531C9.16016 16.9531 9.55078 16.5723 9.55078 16.0645C9.55078 15.8105 9.44336 15.5957 9.28711 15.4297L2.17773 8.47656L9.28711 1.52344C9.44336 1.35742 9.55078 1.13281 9.55078 0.888672C9.55078 0.380859 9.16016 0 8.65234 0C8.39844 0 8.18359 0.0878906 8.01758 0.253906L0.273438 7.83203C0.0878906 8.00781 0 8.23242 0 8.47656Z"
          fillOpacity="0.85"
        />
      </g>
      <defs>
        <clipPath id="clip0_273_1195">
          <rect width="9.55078" height="16.9629" />
        </clipPath>
      </defs>
    </Svg>
  )
}

export default memo(ChevronLeft)