import { createReduxStore } from 'app/store';
import { useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch<ReturnType<typeof createReduxStore>['dispatch']>();
