import ChrevronRight from "../Icons/ChrevronRight"
import Text, { TextColors, TextWeights } from "../Typography/Text"

import clsx from "clsx"
import { memo } from "react"
import styled from "styled-components"

const Header = styled.button`
  width: 100%;
  height: 42px;
  background-color: ${(props) => props.theme.color.gray_secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  padding: 12px 16px;
  border: none;
  cursor: pointer;

  &.isOpen {
    background-color: transparent;
  }
`

interface DropdownProps {
  handleToggle: () => void
  isOpen: boolean
}

const DropdownHeader = (props: DropdownProps) => {
  const { handleToggle, isOpen } = props
  return (
    <Header className={clsx({ isOpen })} onClick={handleToggle}>
      <Text
        color={isOpen ? TextColors.yellow : TextColors.white}
        weigth={isOpen ? TextWeights.semiBold : TextWeights.regular}
      >
        Todas as categorias
      </Text>

      {!isOpen && <ChrevronRight />}
    </Header>
  )
}

export default memo(DropdownHeader)
