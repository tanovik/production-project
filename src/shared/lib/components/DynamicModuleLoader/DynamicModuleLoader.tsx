import { type AnyAction } from '@reduxjs/toolkit'
import { type ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { type StateSchema, type StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { type Reducer, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<StateSchema[StateSchemaKey], AnyAction>
}
type ReducerListEntry = [StateSchemaKey, Reducer<StateSchema[StateSchemaKey], AnyAction>
]
interface DynamicModuleLoaderProps {
    children?: React.ReactNode
    reducers: ReducersList
    removeAfterUnmount?: boolean
}
export const DynamicModuleLoader: React.FC<DynamicModuleLoaderProps> =
 ({ children, reducers, removeAfterUnmount }) => {
     const store = useStore() as ReduxStoreWithManager
     const dispatch = useDispatch()

     useEffect(() => {
         Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
             store.reducerManager.add(name, reducer)
             dispatch({ type: `@INIT ${name} reducer` })
         })

         return () => {
             if (removeAfterUnmount) {
                 Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
                     store.reducerManager.remove(name)
                     dispatch({ type: `@DESTROY ${name} reducer` })
                 })
             }
         }
     }, [])

     return (
         <>
             {children}
         </>
     )
 }
