import { NavLink } from 'react-router-dom';
import { useMainMenu } from '../../../hooks';
import { useRoute } from '../../../hooks/useRoute';


export const RamdomLink = () => {

    const { handleClickRoute } = useRoute('ramdom');
    const { handleOpenMainMenu } = useMainMenu('');

    return (
        
        <li
            className='menu-movil__link'
            onClick={
                () => {
                    handleClickRoute();
                    handleOpenMainMenu();
                }
            }
        >
            <NavLink to='/ramdom'>
                <div className='menu-movil__svg'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='8vh'
                        height='8vh'
                        className='icon icon-tabler icon-tabler-play-card'
                        viewBox='0 0 24 24'
                        strokeWidth='1'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    >
                        <path stroke='none' d='M0 0h24v24H0z' fill='none'/>
                        <rect transform='rotate(90 12 12)' x='3' y='5' width='18' height='14' rx='2' />
                        <line x1='8' y1='6' x2='8.01' y2='6' />
                        <line x1='16' y1='18' x2='16.01' y2='18' />
                        <path d='M12 16l-3 -4l3 -4l3 4z' />
                    </svg>
                </div>
                <p className='menu-movil__text'>
                    Imagenes Aleatorias
                </p>
            </NavLink>
        </li>
    )
}