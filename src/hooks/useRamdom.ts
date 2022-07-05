import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import { ramdomExitThunk } from '../app/thunks';
import { ramdomThunk } from '../app/thunks/ramdomThunk';
import { ramdomChangeThunk } from '../app/thunks/ramdomChangeThunk';


export const useRamdom = () => {

    const dispatch = useAppDispatch();
    const { ramdom } = useAppSelector(state => state.ramdom);
    // const { ramdom } = ramdom;

    // useEffect(() => {
        
    //     dispatch( ramdomThunk());

    //     return () => {
    //         // clearInterval(interval);
    //         dispatch( ramdomExitThunk());
    //     }

    // }, [dispatch]);

    useEffect(() => {
        
        dispatch( ramdomThunk());
        
        const interval = setInterval(() => {
            
            dispatch( ramdomChangeThunk());
                
        }, 20000);

        return () => {
            clearInterval(interval);
            dispatch( ramdomExitThunk());
        }

    }, [dispatch]);

    return { ramdom }
}