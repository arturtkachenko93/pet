import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import config from 'config';
import { TStoreSchema } from './store-schema';
import { userReducer } from 'entities/user';
import { formReducer } from 'shared/store/slice/form-slice';
import { createReducerManager } from './reducer-manager';

export function createReduxStore(initialState?: TStoreSchema) {
    const isDev = config.get('client.env');

    const rootReducer: ReducersMapObject<TStoreSchema> = {
        user: userReducer,
        /*
        form: formReducer,
*/
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore<TStoreSchema>({
        reducer: reducerManager.reduce,
        devTools: isDev === 'development',
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
