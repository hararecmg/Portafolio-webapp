import { NavLink } from 'react-router-dom';
import { useMainMenu } from '../../../hooks';
import { useRoute } from '../../../hooks/useRoute';


export const FavoriteLink = () => {

    const { 
        handleMouseOverMainMenu, 
        handleMouseOutMainMenu
    } = useMainMenu('favorites');
    const { handleClickRoute } = useRoute('favorites');

    return (
        <li
            className='main-menu__link'
            onMouseOver={handleMouseOverMainMenu}
            onMouseOut={handleMouseOutMainMenu}
            onClick={handleClickRoute}
        >
            <NavLink to='/favorites'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-heart'
                    width= '3rem'
                    height= '3rem'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'/>
                    <path d='M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572' />
                </svg>
            </NavLink>
        </li>
    )
}