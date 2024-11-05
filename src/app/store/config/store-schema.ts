import { TUserSchema } from 'entities/user';
import { TFormSchema } from 'shared/store/types/form-schema';
import { EnhancedStore, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit';

export type TStoreSchema = {
    user: TUserSchema;
    form?: TFormSchema;
};

export type TStoreSchemaKey = keyof TStoreSchema;

export type TReducerManager = {
    getReducerMap: () => ReducersMapObject<TStoreSchema>;
    reduce: (state: TStoreSchema, action: UnknownAction) => TStoreSchema;
    add: (key: TStoreSchemaKey, reducer: Reducer) => void;
    remove: (key: TStoreSchemaKey) => void;
};

export type TReduxStoreManager = EnhancedStore<TStoreSchema> & {
    reducerManager: TReducerManager;
};
