import { NavLink } from 'react-router-dom';
import { useMainMenu } from '../../../hooks';
import { useRoute } from '../../../hooks';


export const HomeLink = () => {

    const { handleClickRoute } = useRoute('home');
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
            <NavLink to='/home'>
                <div className='menu-movil__svg'>
                    <svg 
                        xmlns='http://www.w3.org/2000/svg' 
                        className='icon icon-tabler icon-tabler-home-2' 
                        width='8vh' 
                        height='8vh' 
                        viewBox='0 0 24 24' 
                        strokeWidth='1.5' 
                        fill='none' 
                        strokeLinecap='round' 
                        strokeLinejoin='round'
                    >
                        <path stroke='none' d='M0 0h24v24H0z' fill='none'/>
                        <polyline points='5 12 3 12 12 3 21 12 19 12' />
                        <path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7' />
                        <rect x='10' y='12' width='4' height='4' />
                    </svg>
                </div>
                <p className='menu-movil__text'>
                    Inicio
                </p>
            </NavLink>

        </li>
    )
}