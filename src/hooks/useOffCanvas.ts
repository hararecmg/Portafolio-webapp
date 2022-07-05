import { useAppDispatch } from './reduxHooks';
import { OffCanvasTypes } from '../typescript/interfaces/redux';
import { setMouseStateCanvas } from '../app/slices';
import { canvasLoadingStyleThunk } from '../app/thunks';

export const useOffCanvas = (menuItem: OffCanvasTypes = '') => {

    const dispatch = useAppDispatch();

    const handleMouseOverCanvas = (): void => {

        let text = '';
        switch (menuItem) {
            case '':
                text = '';
                break;
            case 'button':
                text = 'cerrar';
                break;
            case 'linkedin':
                text = 'linkedin';
                break;
            case 'github':
                text = 'github';
                break;
            case 'academico':
                text = 'profesor de matemáticas';
                break;
            case 'curriculum':
                text = 'descarga mi curriculum';
                break;
        }

        dispatch(setMouseStateCanvas({
            mouse_over: menuItem,
            tooltip_text: text
        }))
    }

    const handleMouseOutCanvas = (): void => {
        dispatch(setMouseStateCanvas({
            mouse_over: '',
            tooltip_text: ''
        }))
    }

    const handleOpenCanvas = (): void => {
        dispatch( canvasLoadingStyleThunk() )
    }

    return { 
        handleMouseOverCanvas, 
        handleMouseOutCanvas,
        handleOpenCanvas, 
    }
}