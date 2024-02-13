import oscar from "./oscar_2024.json"

import { ICategory, IVote } from "./protocols"

export const categoriesData: ICategory[] = oscar.map((category, index) => ({
  label: category.categoryName,
  isActive: index === 0,
  hasVote: false
}))

export const votesData: IVote[] = oscar.map((category, index) => ({
  category: category.categoryName,
  list: category.movies,
  selectedMovie: null
}))
