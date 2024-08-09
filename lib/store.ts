import { configureStore } from '@reduxjs/toolkit'
import searchBarReducer from '@/lib/features/nav/searchBarSlice'
import mobileNavReducer from '@/lib/features/nav/mobileNavSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            searchBar: searchBarReducer,
            mobileNav: mobileNavReducer,
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']