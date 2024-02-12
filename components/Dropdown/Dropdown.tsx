import Accordion from "../Accordion/Accordion"

import { memo } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const MovieCategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

interface DropdownProps {
  isOpen: boolean
  handleActiveCategory: (category: string) => void
  categoryList: any[]
}

const Dropdown = (props: DropdownProps) => {
  const { isOpen, handleActiveCategory, categoryList } = props
  return (
    <Container>
      {isOpen && (
        <MovieCategoryList>
          {categoryList.map((category, index) => (
            <Accordion
              key={category.label}
              label={category.label}
              hasLightBg={index % 2 === 0}
              isButton
              handleActiveCategory={handleActiveCategory}
              variant={category.isActive ? "secondary" : "primary"}
              hasVoted={category.hasVote}
            />
          ))}
        </MovieCategoryList>
      )}
    </Container>
  )
}

export default memo(Dropdown)
