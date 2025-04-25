import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import filterReducer from './filterSlice';

const initalState = {
    reducer: {
        contacts: contactsReducer,
        filters: filterReducer,
    },
};

export const store = configureStore(initalState);
