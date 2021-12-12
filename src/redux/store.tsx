import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './slices/loginSlices'
import taskSlice from './slices/taskSlice'

export const store = configureStore({
  reducer: {
      login: loginReducer,
      todo:taskSlice
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;