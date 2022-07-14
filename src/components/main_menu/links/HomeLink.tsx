import { NavLink } from 'react-router-dom';
import { useMainMenu } from '../../../hooks';
import { useRoute } from '../../../hooks/useRoute';


export const HomeLink = () => {

    const { 
        handleMouseOverMainMenu, 
        handleMouseOutMainMenu
    } = useMainMenu('home');
    const { handleClickRoute } = useRoute('home');

    return (
        <li
            className='main-menu__link'
            onMouseOver={handleMouseOverMainMenu}
            onMouseOut={handleMouseOutMainMenu}
            onClick={handleClickRoute}
        >
            <NavLink to='/home'>
                <svg 
                    xmlns='http://www.w3.org/2000/svg' 
                    className='icon icon-tabler icon-tabler-home-2' 
                    width='3rem' 
                    height='3rem' 
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
            </NavLink>
        </li>
    )
}