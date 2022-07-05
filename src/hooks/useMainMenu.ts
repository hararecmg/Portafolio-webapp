import { useAppDispatch } from './reduxHooks';
import { MainMenuTypes } from '../typescript/interfaces/redux';
import { setMouseStateMainMenu } from '../app/slices';

export const useMainMenu = ( menuItem: MainMenuTypes = '' ) => {

    const dispatch = useAppDispatch();

    const handleMouseOverMainMenu = (): void => {

        let text = '';
        switch (menuItem) {
            case '':
                text = '';
                break;
            case 'perfil':
                text = 'contacto'
                break;
            case 'favorites':
                text = 'favoritos';
                break;
            case 'search':
                text = 'busqueda';
                break;
            case 'ramdom':
                text = 'imagenes aleatorias';
                break;
        }

        dispatch(setMouseStateMainMenu({
            mouse_over: menuItem,
            tooltip_text: text
        }))
    }

    const handleMouseOutMainMenu = (): void => {
        dispatch(setMouseStateMainMenu({
            mouse_over: '',
            tooltip_text: ''
        }))
    }

    return { handleMouseOverMainMenu, handleMouseOutMainMenu }
}