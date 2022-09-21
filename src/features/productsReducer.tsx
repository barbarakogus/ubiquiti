import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contentToRender: 'list'
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setContentToRender(state, action) {
            state.contentToRender = action.payload
        }
    }
})

export const { setContentToRender } = productsSlice.actions;
export default productsSlice.reducer;