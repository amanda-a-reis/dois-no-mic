export enum IconColors {
  default = "#FFFFFF",
  selected = "#EDCE74",
  black = "#000000",
}

export enum IconSizes {
  small = "small",
  default = "",
}

export interface IconProps {
  color?: IconColors
  size?: IconSizes
}
