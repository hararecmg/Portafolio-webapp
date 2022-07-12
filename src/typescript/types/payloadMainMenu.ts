import { PayloadAction } from '@reduxjs/toolkit';
import { MainMenuState } from '../interfaces/redux';
import { MainMenuOpen } from '../interfaces/redux/mainMenu';

export type MouseOverMainMenuPayload = PayloadAction<MainMenuState>;
export type OpenMainMenuPayload = PayloadAction<MainMenuOpen>;