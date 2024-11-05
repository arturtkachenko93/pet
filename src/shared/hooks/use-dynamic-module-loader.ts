import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { TReduxStoreManager } from 'app/store';
import { TStoreSchemaKey } from 'app/store/config/store-schema';
import { Reducer } from '@reduxjs/toolkit';

export type TReducersList = {
    [name in TStoreSchemaKey]?: Reducer;
};

type TReducerListEntry = [TStoreSchemaKey, Reducer];

type TUseDynamicModuleLoaderProps = {
    reducersList: TReducersList;
    removeAfterUnmount?: boolean;
};

export const useDynamicModuleLoader = (props: TUseDynamicModuleLoaderProps) => {
    const { reducersList, removeAfterUnmount = true } = props;
    const store = useStore() as TReduxStoreManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducersList).forEach(([name, reducer]: TReducerListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducersList).forEach(([name]: TReducerListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
    }, [dispatch, reducersList, removeAfterUnmount, store.reducerManager]);
};
