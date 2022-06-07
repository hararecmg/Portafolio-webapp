import { createSlice } from '@reduxjs/toolkit';
import { MovieState } from '../../helpers/interfaces/movie';
import { AppMoviePayload } from '../../helpers/types';

export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        page: 0,
        loading: false,
        movies: [],
        status: 'initial',
    } as MovieState,
    reducers: {
        startLoadingMovies: (state: MovieState) => {
            state.loading = true;
            state.status = 'pending';
        },
        setStateMovies: (state: MovieState, action: AppMoviePayload) => {
            state.loading = false;
            state.status = action.payload.status;
            state.page = action.payload.page;
            state.movies = action.payload.movies;
        },
    },
});

export const { startLoadingMovies, setStateMovies } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;