import styled from "styled-components"
import Text, { TextColors, TextWeights } from "../Typography/Text"
import Button from "../Buttons/Button"

const Container = styled.div`
  width: 100%;
  padding: 0px 16px;
  background-color: ${(props) => props.theme.color.gray_primary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`

const ContentText = styled.div`
  width: 372px;
  height: 244px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0px 16px;
`

const TextContainer = styled.div`
  width: 340px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

const ButtonContainer = styled.div`
  width: 323px;
`

interface PersonalShareBannerLargeProps {
  onVote: () => void
}

const PersonalShareBannerLarge = (props: PersonalShareBannerLargeProps) => {
  const { onVote } = props
  return (
    <Container>
      <Content>
        <ContentText>
          <TextContainer>
            <Text
              size="xxLarge"
              color={TextColors.yellow}
              weigth={TextWeights.medium}
            >
              Registramos seus favoritos para o Oscar® 2025
            </Text>
          </TextContainer>
          <Text
            size="large"
            color={TextColors.white}
            weigth={TextWeights.regular}
          >
            O resultado dos filmes mais votados será apresentado no podcast no
            dia 8 de março às 12:00.
          </Text>
        </ContentText>
        <ButtonContainer>
          <Button
            label="Votar novamente"
            variant="secondary"
            onClick={onVote}
          />
        </ButtonContainer>
      </Content>
    </Container>
  )
}

export default PersonalShareBannerLarge
