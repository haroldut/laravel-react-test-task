import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "items",
    initialState: [],
    reducers: {
        addItems: (state, items) => {
            const { type, users } = items.payload;
            const existingUsers = state.find(
                (item) => item.payload.type === type
            );
            if (existingUsers) {
                existingUsers.users = users;
            } else {
                state.push(items);
            }
        },
        clearItems: () => [],
    },
});

export const { actions, reducer } = slice;
