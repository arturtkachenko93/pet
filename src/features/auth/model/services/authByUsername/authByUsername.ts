import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TUser } from 'entities/user';

export type TAuthByUserName = {
    username: string;
    password: string;
};

export const authByUsername = createAsyncThunk<TUser, TAuthByUserName, { rejectValue: string }>(
    'auth/authByUsername',
    async (userData, thunkApi) => {
        try {
            const response = await axios.post<TUser>('http://localhost:3002/login', userData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.error(e);

            let error;

            if (e?.code) {
                error = e.code;
            } else {
                error = e.response.data.message;
            }

            return thunkApi.rejectWithValue(error);
        }
    },
);
