import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TFormNames, TFormFieldsName, TFormSchema } from 'shared/store/types/form-schema';
import { initialAuthFormFields } from 'shared/utils/form/initial-auth-form-fields';
import { authByUsername } from 'features/auth';

const initialState: TFormSchema = {
    fields: {
        authForm: initialAuthFormFields(),
    },
    currentFormName: null,
    isLoading: false,
};

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setCurrentFormName: (state, action: PayloadAction<TFormNames>) => {
            state.currentFormName = action.payload;
        },
        saveFieldValue: (
            state,
            {
                payload: { name, value, formName },
            }: PayloadAction<{ name: TFormFieldsName; value: string | null; formName: TFormNames }>,
        ) => {
            state.fields[formName][name].value = value;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(authByUsername.pending, (state) => {
            state.error = null;
            state.isLoading = true;
        });
        builder.addCase(authByUsername.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(authByUsername.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
    },
});

export const { actions: formActions, reducer: formReducer } = formSlice;
