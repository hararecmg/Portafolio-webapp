import { createSlice } from '@reduxjs/toolkit';
import { StateRoute } from '../../typescript/interfaces/redux/routeInterfaces';
import { RoutePayload } from '../../typescript/types/payloadRoute';


const initialState: StateRoute = {
    route: 'ramdom'
}


export const routeSlice = createSlice({
    name: 'route',
    initialState,
    reducers: {
        changeRoute: (state: StateRoute, action: RoutePayload) => {
            state.route = action.payload.route;
        }
    },
});


export const { changeRoute } = routeSlice.actions;
export const routeReducer = routeSlice.reducer;