import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './slice';

const store = configureStore({
    reducer: {
        items: reducer,
    },
});

export default store;
