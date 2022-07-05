import { useMainMenu } from '../../hooks';
import { useOffCanvas } from '../../hooks';


export const MainMenuProfile = () => {

    const {
        handleMouseOverMainMenu,
        handleMouseOutMainMenu,
    } = useMainMenu('perfil');

    const { handleOpenCanvas } = useOffCanvas();

    return (
        <div
            onMouseOver={ handleMouseOverMainMenu }
            onMouseOut={ handleMouseOutMainMenu }
            onClick={ handleOpenCanvas }
            className='main-menu__profile'>
            <div className='main-menu__image'>
                <img
                    src={'https://avatars.githubusercontent.com/u/99056317?v=4'}
                    alt='imagen de perfil'
                />
            </div>
        </div>
    )
}