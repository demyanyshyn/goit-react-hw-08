import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

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
