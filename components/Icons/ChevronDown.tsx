import { memo } from "react"
import { IconColors, IconProps } from "./types/IconProps"

const ChevronDown = (props: IconProps) => {
  const { color = IconColors.default } = props
  return (
    <svg
      width="17"
      height="11"
      viewBox="0 0 17 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_273_1191)">
        <path
          d="M8.48633 10.4004C8.73047 10.4004 8.97461 10.3027 9.14062 10.1172L16.6992 2.37305C16.8652 2.20703 16.9629 1.99219 16.9629 1.74805C16.9629 1.24023 16.582 0.849609 16.0742 0.849609C15.8301 0.849609 15.6055 0.947266 15.4395 1.10352L7.95898 8.75H9.00391L1.52344 1.10352C1.36719 0.947266 1.14258 0.849609 0.888672 0.849609C0.380859 0.849609 0 1.24023 0 1.74805C0 1.99219 0.0976562 2.20703 0.263672 2.38281L7.82227 10.1172C8.00781 10.3027 8.23242 10.4004 8.48633 10.4004Z"
          fill={color}
          fillOpacity="0.85"
        />
      </g>
      <defs>
        <clipPath id="clip0_273_1191">
          <rect width="16.9629" height="10.4004" fill={color} />
        </clipPath>
      </defs>
    </svg>
  )
}

export default memo(ChevronDown)
