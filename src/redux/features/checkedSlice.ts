import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CheckedState {
    value: boolean
}
  
const initialState: CheckedState = {
    value: false,
}

export const checkedSlice = createSlice({
    name: 'checked',
    initialState,
    reducers: {
        checked: (state, action: PayloadAction<boolean>) => {
            state.value = !state.payload   
        }
    }
})

export const { checked } = checkedSlice.actions

export default checkedSlice.reducer
