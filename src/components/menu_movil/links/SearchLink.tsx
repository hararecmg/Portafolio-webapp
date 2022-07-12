import { NavLink } from 'react-router-dom';
import { useMainMenu } from '../../../hooks';
import { useRoute } from '../../../hooks/useRoute';


export const SearchLink = () => {

    const { handleClickRoute } = useRoute('search');
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
            <NavLink to='/search'>
                <div className='menu-movil__svg'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='8vh'
                        height='8vh'
                        className='icon icon-tabler icon-tabler-search'
                        viewBox='0 0 24 24'
                        strokeWidth='1'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        >
                        <path stroke='none' d='M0 0h24v24H0z' fill='none'/>
                        <circle cx='10' cy='10' r='7' />
                        <line x1='21' y1='21' x2='15' y2='15' />
                    </svg>
                </div>
                <p className='menu-movil__text'>
                    Busqueda
                </p>
            </NavLink>

        </li>
    )
}