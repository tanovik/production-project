import { type Reducer } from '@reduxjs/toolkit'
import { type ReduxStoreWithManager, type StateSchemaKey } from '@/app/providers/StoreProvider'
import { useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}
// export type ReducersList = {
//     [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
// }

interface DynamicModuleLoaderProps {
    children?: React.ReactNode
    reducers: ReducersList
    removeAfterUnmount?: boolean
}
export const DynamicModuleLoader: React.FC<DynamicModuleLoaderProps> =
 ({ children, reducers, removeAfterUnmount = true }) => {
     const store = useStore() as ReduxStoreWithManager
     const dispatch = useDispatch()

     useEffect(() => {
         const mountedReducers = store.reducerManager.getMountedReducers()

         Object.entries(reducers).forEach(([name, reducer]) => {
             const mounted = mountedReducers[name as StateSchemaKey]
             // Adds new reducer only if not mounted
             if (!mounted) {
                 store.reducerManager.add(name as StateSchemaKey, reducer)
                 dispatch({ type: `@INIT ${name} reducer` })
             }
         })

         return () => {
             if (removeAfterUnmount) {
                 Object.entries(reducers).forEach(([name, reducer]) => {
                     store.reducerManager.remove(name as StateSchemaKey)
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
