import { createSelector, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { logoutThunk } from '../auth/operations';

const initialState = {
    items: [],
    loading: false,
    error: null,
};
const slice = createSlice({
    name: 'contacts',
    initialState,

    extraReducers: builder => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(
                    item => item.id !== action.payload
                );
            })
            .addCase(logoutThunk.fulfilled, (state, action) => {
                return initialState;
            })
            .addMatcher(
                isAnyOf(
                    fetchContacts.pending,
                    addContact.pending,
                    deleteContact.pending
                ),
                (state, action) => {
                    state.loading = true;
                }
            )
            .addMatcher(
                isAnyOf(
                    fetchContacts.rejected,
                    addContact.rejected,
                    deleteContact.rejected
                ),
                (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )
            .addMatcher(
                isAnyOf(
                    fetchContacts.fulfilled,
                    addContact.fulfilled,
                    deleteContact.fulfilled
                ),
                (state, action) => {
                    state.error = null;
                    state.loading = false;
                }
            );
    },
});

export const contactsReducer = slice.reducer;
