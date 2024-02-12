import { ICategory } from "../../movies/data"
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
  handleClick: (category: string) => void
  categoryList: ICategory[]
}

const Dropdown = (props: DropdownProps) => {
  const { isOpen, handleClick, categoryList } = props
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
              handleActiveCategory={handleClick}
              variant={category.isActive ? "secondary" : "primary"}
              hasVote={category.hasVote}
            />
          ))}
        </MovieCategoryList>
      )}
    </Container>
  )
}

export default memo(Dropdown)
