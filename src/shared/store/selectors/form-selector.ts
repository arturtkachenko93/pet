import { TStoreSchema } from 'app/store/config/store-schema';
import { createSelector } from '@reduxjs/toolkit';
import { TFormFieldsName, TFormNames, TFormSchema } from 'shared/store/types/form-schema';

export const getFormSelector = (state: TStoreSchema) => state.form as TFormSchema;

export const formIsLoadingSelector = createSelector(getFormSelector, (form) => form?.isLoading);

export const formErrorSelector = createSelector(getFormSelector, (form) => form?.error);

export const getFormField = createSelector(getFormSelector, (form) => form?.fields);

export const getStoreValueSelector = (formName: TFormNames, fieldName: TFormFieldsName) =>
    createSelector(getFormField, (field) => field?.[formName]?.[fieldName]?.value);

export const getCurrentFormName = createSelector(getFormSelector, (form) => form?.currentFormName);
