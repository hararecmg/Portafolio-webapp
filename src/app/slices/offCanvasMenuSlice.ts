import { createSlice } from '@reduxjs/toolkit';
import { OffCanvasMenuState } from '../../typescript/interfaces/redux';
import { OpenOffCanvasPayload, MouseCanvasPayload } from '../../typescript/types';

export const offCanvasMenuSlice = createSlice({
    name: 'offCanvas',
    initialState: {
        open: false,
        mouse_over: '',
        tooltip_text: '',
        loading: false,
    } as OffCanvasMenuState,
    reducers: {
        setOpenOffCanvas: (state: OffCanvasMenuState, action: OpenOffCanvasPayload) => {
            state.open = action.payload.open;
            state.loading = action.payload.loading;
        },
        setMouseStateCanvas: (state: OffCanvasMenuState, action: MouseCanvasPayload) => {
            state.mouse_over = action.payload.mouse_over;
            state.tooltip_text = action.payload.tooltip_text;
        },
    },
});


export const { setOpenOffCanvas, setMouseStateCanvas } = offCanvasMenuSlice.actions;
export const offCanvasMenuReducer = offCanvasMenuSlice.reducer;