import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { TFormSchema } from 'shared/store/types/form-schema';
import { FORM_CONFIG } from 'shared/config/form/form-config';

export const getExtraReducers = (builder: ActionReducerMapBuilder<TFormSchema>) => {
    return Object.keys(FORM_CONFIG).reduce((acc, item) => {
        console.log(item);
        builder
            // @ts-ignore

            .addCase([item]?.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            // @ts-ignore

            .addCase([item]?.fulfilled, (state) => {
                state.isLoading = false;
            })
            // @ts-ignore

            .addCase([item]?.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });

        return acc;
    }, {});
};
