import oscar from './oscar.json'

const categoriesLenght = oscar.length

export const listDefault = Array.from(
  { length: categoriesLenght },
  () => 'default'
)

const categories = []

for (let i = 0; i <= oscar.length - 1; i++) {
  categories.push({
    name: oscar[i].categoryName,
    movies: oscar[i].movies,
    voted: false,
    list: listDefault
  })
}

export { categories, categoriesLenght }
