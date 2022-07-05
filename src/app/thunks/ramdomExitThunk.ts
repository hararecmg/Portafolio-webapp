import { setDataTrendings } from '../slices';
import { AppDispatch, RootState } from '../../typescript/types';


export const ramdomExitThunk = () => {

    return async ( dispatch: AppDispatch, getState: () => RootState ) => {

        const { ramdom: { off_set, total_data } } = getState();

        dispatch( setDataTrendings({
                loading: false,
                status: 'initial',
                ramdom: [],
                index: 0,
                off_set,
                total_data,
            })
        )
    }
}