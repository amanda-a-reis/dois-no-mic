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

export const bestMoviePoster = {
  oppenheimer: {
    src: "/bestMovie/oppenheimer.webp",
    alt: "Oppenheimer"
  },
  barbie: {
    src: "/bestMovie/barbie.webp",
    alt: "Barbie"
  },
  american_fiction: {
    src: "/bestMovie/american-fiction.webp",
    alt: "American Fiction"
  },
  zona_de_interesse: {
    src: "/bestMovie/zona-de-interesse.webp",
    alt: "Zona de Interesse"
  },
  os_rejeitados: {
    src: "/bestMovie/os-rejeitados.webp",
    alt: "Os Rejeitados"
  },
  pobres_criaturas: {
    src: "/bestMovie/pobres-criaturas.webp",
    alt: "Pobres Criaturas"
  },
  anatomia_de_uma_queda: {
    src: "/bestMovie/anatomia-de-uma-queda.webp",
    alt: "Anatomia de uma Queda"
  },
  maestro: {
    src: "/bestMovie/maestro.webp",
    alt: "Maestro"
  },
  assassinos_da_lua_das_flores: {
    src: "/bestMovie/assassinos-da-lua-das-flores.webp",
    alt: "Assassinos da Lua das Flores"
  },
  vidas_passadas: {
    src: "/bestMovie/vidas-passadas.webp",
    alt: "Vidas Passadas"
  }
}
