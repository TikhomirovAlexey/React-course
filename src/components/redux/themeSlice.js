import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: true,
    },
    reducers: {
        toogleTheme: (state) => {
            state.value = !state.value;
        },
    },
})

export const { toogleTheme } = themeSlice.actions

export default themeSlice.reducer