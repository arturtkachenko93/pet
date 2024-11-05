import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TAuthFormSchema } from 'features/auth/components/auth-form/model/types/auth-form-schema';

const initialState: TAuthFormSchema = { isLoading: false, password: '', username: '' };

export const authFormSlice = createSlice({
    name: 'authForm',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
});

export const { actions: authFormActions, reducer: authFormReducer } = authFormSlice;
