import styled from "styled-components"
import CloseMark from "../Icons/CloseMark"

const IconContainer = styled.button`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  border: none;
  cursor: pointer;
  background-color: transparent;
`

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CloseMarkButton = (props: ButtonProps) => {
  const { ...rest } = props
  return (
    <IconContainer {...rest}>
      <CloseMark />
    </IconContainer>
  )
}

export default CloseMarkButton
