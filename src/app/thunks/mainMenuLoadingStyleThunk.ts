import { AppDispatch, RootState } from '../../typescript/types';
import { openMainMenu } from '../slices';


export const mainMenuLoadingStyleThunk = (seconds: number = 0.7) => {

    return async ( dispatch: AppDispatch, getState: () => RootState ) => {

        const { mainMenu: { open }} = getState();

        dispatch( openMainMenu({
            open: !open,
            loading: true,
        }));
        
        setTimeout(() => {
            dispatch( openMainMenu({
                open: !open,
                loading: false,
            }))
        }, seconds * 1000);
    }
}