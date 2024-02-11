import { memo } from "react"
import { IconColors, IconProps } from "./types/IconProps"

const Heart = (props: IconProps) => {
  const { color = IconColors.default } = props
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_273_1190)">
        <path
          d="M0 6.49414C0 10.6543 3.48633 14.7461 8.99414 18.2617C9.19922 18.3887 9.49219 18.5254 9.69727 18.5254C9.90234 18.5254 10.1953 18.3887 10.4102 18.2617C15.9082 14.7461 19.3945 10.6543 19.3945 6.49414C19.3945 3.03711 17.0215 0.595703 13.8574 0.595703C12.0508 0.595703 10.5859 1.45508 9.69727 2.77344C8.82812 1.46484 7.34375 0.595703 5.53711 0.595703C2.37305 0.595703 0 3.03711 0 6.49414ZM1.57227 6.49414C1.57227 3.89648 3.25195 2.16797 5.51758 2.16797C7.35352 2.16797 8.4082 3.31055 9.0332 4.28711C9.29688 4.67773 9.46289 4.78516 9.69727 4.78516C9.93164 4.78516 10.0781 4.66797 10.3613 4.28711C11.0352 3.33008 12.0508 2.16797 13.877 2.16797C16.1426 2.16797 17.8223 3.89648 17.8223 6.49414C17.8223 10.127 13.9844 14.043 9.90234 16.7578C9.80469 16.8262 9.73633 16.875 9.69727 16.875C9.6582 16.875 9.58984 16.8262 9.50195 16.7578C5.41016 14.043 1.57227 10.127 1.57227 6.49414Z"
          fill={color}
          fillOpacity="0.85"
        />
      </g>
      <defs>
        <clipPath id="clip0_273_1190">
          <rect width="19.3945" height="18.5254" fill={color} />
        </clipPath>
      </defs>
    </svg>
  )
}

export default memo(Heart)