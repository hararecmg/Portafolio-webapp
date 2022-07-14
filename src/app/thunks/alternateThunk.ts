import { AppDispatch, RootState } from '../../typescript/types';
import { changeAlternate } from '../slices';


export const alternateThunk = () => {

    return async ( dispatch: AppDispatch, getState: () => RootState ) => {

        const { route: { alternate }} = getState();

        dispatch( changeAlternate({
            alternate: !alternate,
        }))
    }
}