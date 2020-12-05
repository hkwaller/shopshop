import React, { useEffect, useState } from 'react'
import { Screen } from 'app/components'
import { getLists } from 'app/utils/api'
import { Category, List as ListType } from '../../utils/types'
import ListPreview from './components/ListPreview'
import List from './components/List'

type Props = {}

function Lists(props: Props) {
  const [lists, setLists] = useState<ListType[]>([])

  useEffect(() => {
    async function get() {
      const lists = await getLists()
      setLists(lists)
    }

    get()
  }, [])

  return (
    <Screen>
      {lists.map((list) => {
        return <ListPreview list={list} />
      })}
      {lists.length === 1 && <List products={lists[0].products} />}
    </Screen>
  )
}
export default Lists
