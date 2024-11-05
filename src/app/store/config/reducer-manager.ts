import { combineReducers, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit';
import { TReducerManager, TStoreSchema, TStoreSchemaKey } from '../config/store-schema';

export const createReducerManager = (
    initialReducers: ReducersMapObject<TStoreSchema>,
): TReducerManager => {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: TStoreSchemaKey[] = [];

    return {
        getReducerMap: () => reducers,

        reduce: (state: TStoreSchema, action: UnknownAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                for (let key of keysToRemove) {
                    delete state[key];
                }
                keysToRemove = [];
            }

            return combinedReducer(state, action);
        },

        add: (key: TStoreSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            reducers[key] = reducer;
            combinedReducer = combineReducers(reducers);
        },

        remove: (key: TStoreSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }

            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        },
    };
};
