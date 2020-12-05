export type List = {
  name: string
  products: Product[]
}

export type Product = {
  name: string
  category: Category
  sortOrder: number
}

export type Category = {
  name: string
  color: string
  icon: string
  sortOrder: number
}
