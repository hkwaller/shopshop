import { token } from '../../token'
import { Category, List } from './types'

const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: 'rz30en4n',
  dataset: 'production',
  token: token,
  useCdn: false,
})

export async function getLists() {
  const query = `*[_type == "list"]`
  const categoryQuery = `*[_type == "category"]`
  const categories = await client
    .fetch(categoryQuery)
    .then((categories: Category[]) => {
      return categories
    })

  return await client.fetch(query).then((lists: List[]) => {
    return lists.map((list) => {
      const products = list.products.map((product) => {
        return {
          ...product,
          category: categories.filter(
            (category: Category) => category._id === product.category._ref
          )[0],
        }
      })

      return { ...list, products: products }
    })
  })
}
