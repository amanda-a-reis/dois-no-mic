import { memo } from "react"
import { IconColors, IconProps } from "./types/IconProps"

const ChevronUp = (props: IconProps) => {
  const { color = IconColors.default } = props
  return (
    <svg
      width="17"
      height="11"
      viewBox="0 0 17 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_273_1192)">
        <path
          d="M0.263672 8.02734C0.0976562 8.18359 0 8.4082 0 8.66211C0 9.16992 0.380859 9.55078 0.888672 9.55078C1.14258 9.55078 1.37695 9.46289 1.52344 9.29688L9.00391 1.66016H7.95898L15.4395 9.29688C15.5957 9.46289 15.8301 9.55078 16.0742 9.55078C16.582 9.55078 16.9629 9.16992 16.9629 8.66211C16.9629 8.4082 16.8652 8.18359 16.6992 8.02734L9.14062 0.292969C8.97461 0.107422 8.73047 0 8.48633 0C8.23242 0 7.99805 0.107422 7.82227 0.292969L0.263672 8.02734Z"
          fill={color}
          fillOpacity="0.85"
        />
      </g>
      <defs>
        <clipPath id="clip0_273_1192">
          <rect width="16.9629" height="10.3418" fill={color} />
        </clipPath>
      </defs>
    </svg>
  )
}

export default memo(ChevronUp)
