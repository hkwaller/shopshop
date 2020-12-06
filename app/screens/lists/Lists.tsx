import React, { useEffect, useState } from 'react'
import { view } from '@risingstack/react-easy-state'
import { Screen } from 'app/components'
import { getLists } from 'app/utils/api'
import ListPreview from './components/ListPreview'
import List from './components/List'
import { state } from 'app/utils/store'

function Lists() {
  useEffect(() => {
    async function get() {
      await getLists()
    }
    get()
  }, [])

  console.log('state.lists: ', state.lists)
  return (
    <Screen>
      {state.lists.map((list, index) => {
        return <ListPreview key={index} list={list} />
      })}
      {state.lists.length === 1 && <List products={state.lists[0].products} />}
    </Screen>
  )
}
export default view(Lists)
