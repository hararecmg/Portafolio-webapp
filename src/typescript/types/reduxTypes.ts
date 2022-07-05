import { TypedUseSelectorHook } from 'react-redux';
import { store } from '../../app/store';

export type RootState = ReturnType<typeof store.getState>;
export type AppSelector = TypedUseSelectorHook<RootState>
export type AppDispatch = typeof store.dispatch;