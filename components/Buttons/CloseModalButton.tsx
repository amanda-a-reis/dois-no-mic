import styled from "styled-components"
import Text, { TextColors } from "../Typography/Text"
import CloseMark from "../Icons/CloseMark"
import { IconSizes } from "../Icons/types/IconProps"

const ButtonContainer = styled.button`
  border-radius: 32px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  background-color: ${(props) => props.theme.color.gray_primary};

  @media (min-width: 1024px) {
    display: none;
  }
`

const ButtonInlineContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8px;
`

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CloseModalButton = (props: ButtonProps) => {
  const { ...rest } = props
  return (
    <ButtonContainer {...rest}>
      <ButtonInlineContainer>
        <CloseMark size={IconSizes.small} />
        <Text size="small" color={TextColors.white}>
          Fechar
        </Text>
      </ButtonInlineContainer>
    </ButtonContainer>
  )
}

export default CloseModalButton
