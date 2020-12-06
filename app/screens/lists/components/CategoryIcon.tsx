import React from 'react'
import { View, Text } from 'react-native'
import { spacing } from 'app/utils'
import { Category } from 'app/utils/types'

type Props = {
  category: Category
}

function CategoryIcon({ category }: Props) {
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
