import { PayloadAction } from '@reduxjs/toolkit';
import { OffCanvasMenuState } from '../interfaces/redux';
import { MouseOverCanvas } from '../interfaces/redux/offCanvasMenu';

export type OpenOffCanvasPayload = PayloadAction<OffCanvasMenuState>;
export type MouseCanvasPayload = PayloadAction<MouseOverCanvas>;