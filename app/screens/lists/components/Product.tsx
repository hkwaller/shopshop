import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Bold, Subtitle } from '../../../components'
import { spacing } from '../../../utils'
import { Product as ProductType } from '../../../utils/types'
import CategoryIcon from './CategoryIcon'

type Props = {
  product: ProductType
}

function Product({ product }: Props) {
  return (
    <View style={styles.container}>
      <CategoryIcon category={product.category} />
      <View style={{ marginLeft: spacing.lg }}>
        <Bold>{product.name}</Bold>
        <Subtitle>{product.category.name}</Subtitle>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default Product
