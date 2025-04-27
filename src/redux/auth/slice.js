import { createSlice } from '@reduxjs/toolkit';
import {
    registerThunk,
    refreshUserThunk,
    loginThunk,
    logoutThunk,
} from './operations';

const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};
const slice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(registerThunk.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.token = action.payload.token;
                state.user = action.payload.user;
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.token = action.payload.token;
                state.user = action.payload.user;
            })
            .addCase(logoutThunk.fulfilled, (state, action) => {
                return initialState;
            })
            .addCase(refreshUserThunk.pending, state => {
                state.isRefreshing = true;
            })
            .addCase(refreshUserThunk.rejected, state => {
                state.isRefreshing = false;
            })
            .addCase(refreshUserThunk.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(logoutThunk.rejected, (state, action) => {
                state.isError = action.payload;
            });
    },
});

export const authReducer = slice.reducer;
