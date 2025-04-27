import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/slice';
import filterReducer from './filters/slice';
import { authReducer } from './auth/slice';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

const initalState = {
    reducer: {
        contacts: contactsReducer,
        filters: filterReducer,
        auth: persistReducer(authPersistConfig, authReducer),
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
    devTools: process.env.NODE_ENV === 'development',
};

export const store = configureStore(initalState);

export const persistor = persistStore(store);
