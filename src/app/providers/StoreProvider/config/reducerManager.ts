import {
    type ReducersMapObject, combineReducers,
    type AnyAction, type Reducer
} from '@reduxjs/toolkit'
import { type StateSchemaKey, type ReducerManagerType, type StateSchema, type MountedReducers } from './StateSchema'

export function createReducerManager (initialReducers: ReducersMapObject<StateSchema>): ReducerManagerType {
    // Create an object which maps keys to reducers
    const reducers = { ...initialReducers }

    let combinedReducer = combineReducers(reducers)

    // An array which is used to delete state keys when reducers are removed
    let keysToRemove: StateSchemaKey[] = []
    const mountedReducers: MountedReducers = {}

    return {
        getReducerMap: () => reducers,
        getMountedReducers: () => mountedReducers,

        // The root reducer function exposed by this object
        // This will be passed to the store
        reduce: (state: StateSchema, action: AnyAction) => {
            // If any reducers have been removed, clean up their state first
            if (keysToRemove.length > 0) {
                state = { ...state }
                keysToRemove.forEach((key) => {
                    delete state[key]
                })
                keysToRemove = []
            }
            return combinedReducer(state, action)
        },

        // Adds a new reducer with the specified key
        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || (reducers[key] != null)) {
                return
            }
            reducers[key] = reducer
            mountedReducers[key] = true
            combinedReducer = combineReducers(reducers)
        },

        // Removes a reducer with the specified key
        remove: (key: StateSchemaKey) => {
            if (!key || (reducers[key] == null)) {
                return
            }

            delete reducers[key]
            keysToRemove.push(key)
            mountedReducers[key] = false
            combinedReducer = combineReducers(reducers)
        }
    }
}
