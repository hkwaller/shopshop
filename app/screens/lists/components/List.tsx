import React from 'react'
import { View, Text } from 'react-native'
import { Product as ProductType } from '../../../utils/types'
import Product from './Product'

type Props = {
  products: ProductType[]
}

function List({ products }: Props) {
  return (
    <View>
      {products.map((product: ProductType) => {
        return <Product {...{ product }} />
      })}
    </View>
  )
}

export default List
