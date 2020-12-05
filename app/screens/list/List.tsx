import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from 'app/components/Header'
import { Screen } from 'app/components'

type Props = {}

function List(props: Props) {
  return (
    <Screen>
      <Header />
    </Screen>
  )
}
export default List
