import { Provider } from 'react-redux';
import { FC, ReactNode } from 'react';
import { createReduxStore } from '../index';
import { TStoreSchema } from '../config/store-schema';

type StoreProviderProps = { children: ReactNode; initialState?: TStoreSchema };

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children, initialState } = props;
    const store = createReduxStore(initialState);

    return <Provider store={store}>{children}</Provider>;
};
