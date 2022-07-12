import { useAppDispatch, useAppSelector } from './reduxHooks';
import { MainMenuTypes } from '../typescript/interfaces/redux';
import { setMouseStateMainMenu } from '../app/slices';
import { mainMenuLoadingStyleThunk } from '../app/thunks/mainMenuLoadingStyleThunk';

export const useMainMenu = ( menuItem: MainMenuTypes = '' ) => {

    const { open, loading } = useAppSelector(state => state.mainMenu);
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
    const handleOpenMainMenu = (): void => {
        dispatch(mainMenuLoadingStyleThunk())
    }

    return { 
        handleMouseOverMainMenu, 
        handleMouseOutMainMenu,
        handleOpenMainMenu,
        open,
        loading, 
    }
}