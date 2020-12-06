import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CheckmarkIcon from 'app/icons/CheckmarkIcon'
import { colors, spacing } from 'app/utils'

type Props = {
  checked: boolean
}

function Checkmark({ checked }: Props) {
  return (
    <View style={{ width: 30, height: 30 }}>
      <View style={[styles.square, { borderColor: colors.grey }]}></View>
      {checked && <CheckmarkIcon />}
    </View>
  )
}

const styles = StyleSheet.create({
  square: {
    position: 'absolute',
    width: 25,
    height: 25,
    left: 2,
    top: 2,
    padding: spacing.sm,
    borderRadius: 3,
    borderWidth: 4,
  },
})

export default Checkmark
