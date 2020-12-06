import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { spacing } from '../utils'
import Header from './Header'

type Props = {
  children: React.ReactNode
}

function Screen({ children }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView}>{children}</ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  scrollView: {
    paddingVertical: spacing.xl,
  },
})

export default Screen
