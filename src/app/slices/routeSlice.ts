import { createSlice } from '@reduxjs/toolkit';
import { StateRoute, Alternate } from '../../typescript/interfaces/redux/routeInterfaces';
import { RoutePayload, AlternatePayload } from '../../typescript/types/payloadRoute';


const initialState: StateRoute = {
    route: 'home',
    alternate: false,
}


export const routeSlice = createSlice({
    name: 'route',
    initialState,
    reducers: {
        changeRoute: (state: StateRoute, action: RoutePayload) => {
            state.route = action.payload.route;
        },
        changeAlternate: (state: Alternate, action: AlternatePayload) => {
            state.alternate = action.payload.alternate;
        },
    },
});


export const { changeRoute, changeAlternate } = routeSlice.actions;
export const routeReducer = routeSlice.reducer;