import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const slice = createSlice({
    name: 'filter',
    initialState: {
        name: '',
    },
    reducers: {
        changeFilter: (state, action) => {
            return { ...state, name: action.payload };
        },
    },
});
export const { changeFilter } = slice.actions;
export default slice.reducer;
export const selectNameFilter = state => state.filters.name ?? '';
