import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { List } from 'app/utils/types'
import { H2 } from 'app/components'
import { spacing } from 'app/utils'

type Props = {
  list: List
}

function ListPreview({ list }: Props) {
  return (
    <View style={styles.container}>
      <H2>{list.name}</H2>
      <Text>{list.products.length}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
})

export default ListPreview
