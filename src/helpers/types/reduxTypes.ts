import { PayloadAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook } from 'react-redux';
import { MoviePayload } from '../interfaces/movie';
import { store } from '../../app/store';

export type RootState = ReturnType<typeof store.getState>;
export type AppSelector = TypedUseSelectorHook<RootState>
export type AppDispatch = typeof store.dispatch;

// Payloads
export type AppMoviePayload = PayloadAction<MoviePayload>;