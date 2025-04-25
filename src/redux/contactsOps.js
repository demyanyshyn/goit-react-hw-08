import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6807243fe81df7060eb8f37e.mockapi.io/contacts';
export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (signal, thunkAPI) => {
        try {
            const response = await axios.get('', {
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
        try {
            const response = await axios.delete(id);
            return id;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (body, thunkAPI) => {
        try {
            const response = await axios.post('', body);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
