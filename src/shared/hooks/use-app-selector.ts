import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { TStoreSchema } from 'app/store/config/store-schema';

export const useAppSelector: TypedUseSelectorHook<TStoreSchema> = useSelector;
