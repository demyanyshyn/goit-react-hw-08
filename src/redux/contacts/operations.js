import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { goitApi } from '../auth/operations';

export const contactsApi = axios.create({
    baseURL: 'https://connections-api.goit.global/contacts/',
});

const setAuthHeader = token => {
    contactsApi.defaults.headers.common.Authorization = token;
};

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (signal, thunkAPI) => {
        setAuthHeader(thunkAPI.getState().auth.token);
        try {
            const response = await contactsApi.get('', {
                signal,
            });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        setAuthHeader(thunkAPI.getState().auth.token);
        try {
            const response = await contactsApi.delete(id);
            return id;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (body, thunkAPI) => {
        setAuthHeader(thunkAPI.getState().auth.token);
        try {
            const response = await contactsApi.post('', body);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
