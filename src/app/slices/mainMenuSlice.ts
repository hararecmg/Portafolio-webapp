import { createSlice } from '@reduxjs/toolkit';
import { MainMenuState } from '../../typescript/interfaces/redux';
import { MouseOverMainMenuPayload } from '../../typescript/types';

export const mainMenuSlice = createSlice({
    name: 'maniMenu',
    initialState: {
        mouse_over: '',
        tooltip_text: '',
    } as MainMenuState,
    reducers: {
        setMouseStateMainMenu: (state: MainMenuState, action: MouseOverMainMenuPayload) => {
            state.mouse_over = action.payload.mouse_over;
            state.tooltip_text = action.payload.tooltip_text;
        },
    },
});


export const { setMouseStateMainMenu } = mainMenuSlice.actions;
export const mainMenuReducer = mainMenuSlice.reducer;