import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const goitApi = axios.create({
    baseURL: 'https://connections-api.goit.global',
});
const setAuthHeader = token => {
    goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const registerThunk = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const response = await goitApi.post('/users/signup', credentials);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const response = await goitApi.post('/users/login', credentials);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logoutThunk = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await goitApi.post('/users/logout');
            setAuthHeader('');
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const refreshUserThunk = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const savedToken = thunkAPI.getState().auth.token;
        if (!savedToken) {
            return thunkAPI.rejectWithValue('token is not exist!');
        }
        setAuthHeader(savedToken);

        try {
            const response = await goitApi.get('/users/current');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
