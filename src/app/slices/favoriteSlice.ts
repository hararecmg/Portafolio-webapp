import { createSlice } from '@reduxjs/toolkit';
import { StateFavorite } from '../../typescript/interfaces/redux';
import { FavoritePayload } from '../../typescript/types';


export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favorites: [],
    } as StateFavorite,
    reducers: {
        addFavorite: (state: StateFavorite, action: FavoritePayload) => {
            state.favorites = action.payload.favorites;
        },
    },
});


export const { addFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;