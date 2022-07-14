import { PayloadAction } from '@reduxjs/toolkit';
import { StateRoute, Alternate } from '../interfaces/redux'


export type RoutePayload = PayloadAction<StateRoute>;
export type AlternatePayload = PayloadAction<Alternate>;