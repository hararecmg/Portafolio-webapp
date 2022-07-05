import { AppDispatch, RootState } from '../../typescript/types';
import { setOpenOffCanvas } from '../slices';


export const canvasLoadingStyleThunk = () => {

    return async ( dispatch: AppDispatch, getState: () => RootState ) => {

        const { offCanvas: { open }} = getState();

        if (!open) {
            dispatch( setOpenOffCanvas({
                open: true,
            }))
        } else {
            dispatch( setOpenOffCanvas({
                open: false,
                loading: true,
            }))
            setTimeout(() => {
                dispatch( setOpenOffCanvas({
                    open: false,
                    loading: false,
                }))
            }, 700);
        }
    }
}