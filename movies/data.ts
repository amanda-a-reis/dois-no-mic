export const movieList = [
  {
    movieTitle: "Openheimer",
    moviePoster:
      "https://image.tmdb.org/t/p/w500/c0DCmfC7Et2K3URnIJ4ahJpeXR2.jpg"
  },

  {
    movieTitle: "Barbie",
    moviePoster:
      "https://image.tmdb.org/t/p/w500/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg"
  },

  {
    movieTitle: "American Fiction",
    moviePoster:
      "https://image.tmdb.org/t/p/w500/bndwT7YCJv9nEHGSXuzvx9PJ013.jpg"
  },

  {
    movieTitle: "Zona de Interesse",
    moviePoster:
      "https://image.tmdb.org/t/p/w500/7cvX39QbSykkK4aYx4MQhQpXRdc.jpg"
  },

  {
    movieTitle: "Os Rejeitados",
    moviePoster:
      "https://image.tmdb.org/t/p/w500/nuljFk9VbHR8JPPl2uNbu9aMlqg.jpg"
  },

  {
    movieTitle: "Pobres Criaturas",
    moviePoster:
      "https://image.tmdb.org/t/p/w500/kTbBzzdVICzzbv9iFaX0aadvjg0.jpg"
  },

  {
    movieTitle: "Vidas Passadas",
    moviePoster:
      "https://image.tmdb.org/t/p/w500/toSI71gFF11VnLfz2uiNx6jjNUF.jpg"
  },

  {
    movieTitle: "Anatomia de uma Queda",
    moviePoster:
      "https://image.tmdb.org/t/p/w500/woXYl0DJTx6TsfYWPkSfNHTsoOx.jpg"
  },

  {
    movieTitle: "Maestro",
    moviePoster:
      "https://image.tmdb.org/t/p/w500/kxj7rMco6RNYsVcNwuGAIlfWu64.jpg"
  },

  {
    movieTitle: "Assassinos da Lua das Flores",
    moviePoster:
      "https://image.tmdb.org/t/p/w500/sz0HswdqLa6I5ialoyBvn5gm0r5.jpg"
  }
]

export const categoryList = [
  "Melhor Filme",
  "Melhor Ator",
  "Melhor Atriz",
  "Melhor Filme Internacional",
  "Melhor Canção Original",
  "Melhor Filme de Animação",
  "Melhor Direção",
  "Melhores Efeitos Visuais",
  "Melhor Roteiro Original",
  "Melhor Atriz Coadjuvante",
  "Melhor Ator Coadjuvante",
  "Melhor Roteiro Adaptado",
  "Melhor Trilha Sonora Original",
  "Melhor Fotografia",
  "Melhor Maquiagem e Penteados",
  "Melhor Direção de Arte",
  "Melhor Montagem",
  "Melhor Figurino",
  "Melhor Som"
]

export const categoryData = [
  {
    label: "Melhor Filme",
    isActive: true,
    hasVote: false
  },
  {
    label: "Melhor Ator",
    isActive: false,
    hasVote: false
  },
  {
    label: "Melhor Filme Internacional",
    isActive: false,
    hasVote: false
  }
]

export const data = [
  {
    category: "Melhor Filme",
    list: movieList,
    selectedMovie: null
  },
  {
    category: "Melhor Ator",
    list: [],
    selectedMovie: null
  },
  {
    category: "Melhor Filme Internacional",
    list: [
      {
        movieTitle: "Vidas Passadas",
        moviePoster:
          "https://image.tmdb.org/t/p/w500/toSI71gFF11VnLfz2uiNx6jjNUF.jpg"
      }
    ],
    selectedMovie: null
  }
]
