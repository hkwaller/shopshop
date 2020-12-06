import React from 'react'
import { StyleSheet, View } from 'react-native'
import { HeaderText } from '.'
import { spacing } from 'app/utils'

function Header() {
  return (
    <View style={styles.container}>
      <HeaderText>Shop</HeaderText>
      <HeaderText>Shop</HeaderText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.lg,
  },
})

export default Header
