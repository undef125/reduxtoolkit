import { configureStore } from '@reduxjs/toolkit';
import itemReducer from '../features/CartSlice';

const store = configureStore({
    reducer: {
        items: itemReducer,
    }
})

export default store;