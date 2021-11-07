import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "items",
    initialState: [],
    reducers: {
        addItems: (state: any, items) => {
            const { type, users } = items.payload;
            const existingUsers: any = state.find(
                (item: any) => item.payload.type === type
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

export const { actions, reducer } = usersSlice;
