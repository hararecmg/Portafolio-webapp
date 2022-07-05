import { PayloadAction } from '@reduxjs/toolkit';
import { StateRamdom, LoadingRamdom } from '../interfaces/redux';


export type DataRamdomPayload = PayloadAction<StateRamdom>;
export type LoadingRamdomPayload = PayloadAction<LoadingRamdom>;