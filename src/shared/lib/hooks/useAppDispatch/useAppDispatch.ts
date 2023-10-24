import { type AppDispatch } from 'app/providers/StoreProvider'
import { useDispatch } from 'react-redux'

// export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()

// export const useAppDispatch = (): any => useDispatch<AppDispatch>()

export const useAppDispatch = (): any => useDispatch<AppDispatch>()
// export const useAppDispatch = (): Dispatch<AnyAction> => useDispatch<AppDispatch>()
