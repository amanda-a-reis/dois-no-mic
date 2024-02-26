export interface IMovie {
  titlePT: string
  image: string
}

export interface ICategory {
  label: string
  isActive: boolean
  hasVote: boolean
}

export interface IVote {
  category: string
  list: IMovie[]
  selectedMovie: null | string
}
