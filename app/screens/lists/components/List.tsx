import React from 'react'
import { View } from 'react-native'
import { Product as ProductType } from 'app/utils/types'
import Product from './Product'

type Props = {
  products: ProductType[]
}

function List({ products }: Props) {
  return (
    <View>
      {products.map((product: ProductType, index: number) => {
        return <Product key={index} {...{ product }} />
      })}
    </View>
  )
}

export default List
