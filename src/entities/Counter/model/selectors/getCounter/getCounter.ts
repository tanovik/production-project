import { type StateSchema } from 'app/providers/StoreProvider'
import { type CounterSchema } from '../../../index'

export const getCounter = (state: StateSchema): CounterSchema => state.counter
