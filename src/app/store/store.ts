import { configureStore } from '@reduxjs/toolkit';
import { ramdomReducer } from '../slices';
import { mainMenuReducer } from '../slices';
import { offCanvasMenuReducer } from '../slices';
import { favoriteReducer } from '../slices';
import { routeReducer } from '../slices';

export const store = configureStore({
  reducer: {
    ramdom: ramdomReducer,
    favorite: favoriteReducer,
    mainMenu: mainMenuReducer,
    route: routeReducer,
    offCanvas: offCanvasMenuReducer,
  },
});