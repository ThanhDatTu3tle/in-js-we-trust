import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CheckedState {
    value: string
}
  
const initialState: CheckedState = {
    value: 'inactive'
}

export const checkedSlice = createSlice({
    name: 'checked',
    initialState,
    reducers: {
        active: (state) => {
            state.value = 'inactive'
        },
        inactive: (state) => {
            state.value = 'active'
        }
    }
})

export const { active, inactive } = checkedSlice.actions

export default checkedSlice.reducer
