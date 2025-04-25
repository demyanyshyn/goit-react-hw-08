import { createSelector, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOps';
import { selectNameFilter } from './filterSlice';
const slice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
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

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectFilteredContacts = createSelector(
    [selectNameFilter, selectContacts],
    (filterName, contactsList) => {
        return contactsList.filter(contact =>
            Object.values(contact).some(
                value =>
                    typeof value === 'string' &&
                    value.toLowerCase().includes(filterName.toLowerCase())
            )
        );
    }
);
