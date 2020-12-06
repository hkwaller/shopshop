import { store } from '@risingstack/react-easy-state'
import { List } from 'app/utils/types'

export type State = {
  lists: List[]
}

export const state = store<State>({
  lists: [],
})
