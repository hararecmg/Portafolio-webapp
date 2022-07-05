import { createSlice } from '@reduxjs/toolkit';
import { StateRamdom } from '../../typescript/interfaces/redux';
import { DataRamdomPayload } from '../../typescript/types';
import { LoadingRamdomPayload } from '../../typescript/types';


const initialState: StateRamdom = {
    ramdom: [],
    loading: false,
    off_set: 0,
    index: 0,
    status: 'initial',
    total_data: [],
}

export const ramdomSlice = createSlice({
    name: 'ramdom',
    initialState,
    reducers: {
        setLoadingTrendings: (state: StateRamdom, action: LoadingRamdomPayload) => {
            state.loading = action.payload.loading;
            state.status = action.payload.status
            ;
        },
        setDataTrendings: (state: StateRamdom, action: DataRamdomPayload) => {
            state.loading = false;
            state.status = action.payload.status;
            state.off_set = action.payload.off_set;
            state.index = action.payload.index;
            state.total_data = action.payload.total_data;
            state.ramdom = action.payload.ramdom;
        },
    },
});


export const { setLoadingTrendings, setDataTrendings } = ramdomSlice.actions;
export const ramdomReducer = ramdomSlice.reducer;