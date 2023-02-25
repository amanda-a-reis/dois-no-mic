import oscar from './oscar.json'

const categoriesData = []

for (let i = 0; i <= oscar.length - 1; i++) {
  categoriesData.push({
    name: oscar[i].categoryName,
    movies: oscar[i].movies,
    voted: false,
    status: Array.from({ length: oscar[i].movies.length }, () => 'default'),
    size: oscar[i].movies.length
  })
}

export { categoriesData }
