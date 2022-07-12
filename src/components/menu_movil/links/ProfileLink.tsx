import { useOffCanvas } from '../../../hooks';
import { useMainMenu } from '../../../hooks/useMainMenu';


export const ProfileLink = () => {

    const { handleOpenCanvas } = useOffCanvas();
    const { handleOpenMainMenu } = useMainMenu('');

    return (
        <li
            onClick={ 
                () => {
                    handleOpenCanvas();
                    handleOpenMainMenu();
                }
             }
            className='menu-movil__profile'>
            {/* <div className='menu-movil__container'>
            </div> */}
                <div className='menu-movil__image'>
                    <img
                        src={'https://avatars.githubusercontent.com/u/99056317?v=4'}
                        alt='imagen de perfil'
                        />
                </div>
                <p className='menu-movil__text menu-movil__text--profile'>
                    Contacto
                </p>
        </li>
    )
}