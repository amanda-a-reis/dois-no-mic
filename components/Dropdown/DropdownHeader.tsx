import ChrevronRight from "../Icons/ChrevronRight"
import Text from "../Typography/Text"

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

const HeaderLabel = styled(Text)`
  color: ${(props) => props.theme.color.white};

  &.isOpen {
    color: ${(props) => props.theme.color.yellow};
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
      <HeaderLabel className={clsx({ isOpen })}>
        Todas as categorias
      </HeaderLabel>

      {!isOpen && <ChrevronRight />}
    </Header>
  )
}

export default memo(DropdownHeader)
