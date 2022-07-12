import { NavLink } from 'react-router-dom';
import { useMainMenu } from '../../../hooks';
import { useRoute } from '../../../hooks/useRoute';


export const RamdomLink = () => {

    const {
        handleMouseOverMainMenu, 
        handleMouseOutMainMenu
    } = useMainMenu('ramdom');
    const { handleClickRoute } = useRoute('ramdom');

    return (
        
        <li
            className='main-menu__link'
            onMouseOver={handleMouseOverMainMenu}
            onMouseOut={handleMouseOutMainMenu}
            onClick={handleClickRoute}
        >
            <NavLink to='/ramdom'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-play-card'
                    width= '3rem'
                    height= '3rem'
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
            </NavLink>
        </li>
    )
}