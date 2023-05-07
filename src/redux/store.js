import { createStore } from 'redux'
import Tree from './reducers'


export default function configureStore() {
  const store = createStore(Tree)
  return store
}