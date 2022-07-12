import { createSlice } from '@reduxjs/toolkit';
import { MainMenuState } from '../../typescript/interfaces/redux';
import { MouseOverMainMenuPayload } from '../../typescript/types';
import { MainMenuOpen } from '../../typescript/interfaces/redux/mainMenu';
import { OpenMainMenuPayload } from '../../typescript/types/payloadMainMenu';

export const mainMenuSlice = createSlice({
    name: 'maniMenu',
    initialState: {
        mouse_over: '',
        tooltip_text: '',
        open: false,
        loading: false,
    } as MainMenuState,
    reducers: {
        setMouseStateMainMenu: (state: MainMenuState, action: MouseOverMainMenuPayload) => {
            state.mouse_over = action.payload.mouse_over;
            state.tooltip_text = action.payload.tooltip_text;
        },
        openMainMenu: (state: MainMenuOpen, action: OpenMainMenuPayload) => {
            state.open = action.payload.open;
            state.loading = action.payload.loading;
        },
    },
});


export const { setMouseStateMainMenu, openMainMenu } = mainMenuSlice.actions;
export const mainMenuReducer = mainMenuSlice.reducer;