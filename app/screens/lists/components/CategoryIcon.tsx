import React from 'react'
import { View, Text } from 'react-native'
import { spacing } from '../../../utils'
import { Category } from '../../../utils/types'

type Props = {
  category: Category
}

function CategoryIcon({ category }: Props) {
  console.log('category: ', category)
  return (
    <View
      style={{
        padding: spacing.xl,
        borderRadius: 12,
        backgroundColor: category.color,
      }}
    >
      <Text>{category.icon}</Text>
    </View>
  )
}
export default CategoryIcon
