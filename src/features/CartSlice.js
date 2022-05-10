import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
}

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.splice(action.payload,1);
        }
    }
});

export const { addItems,removeItem } = CartSlice.actions;
export default CartSlice.reducer;