import { createSlice } from '@reduxjs/toolkit';
import { TUserSchema } from '../types/user-schema';

const initialState: TUserSchema = {};

export const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const { actions: userActions, reducer: userReducer } = loginSlice;
