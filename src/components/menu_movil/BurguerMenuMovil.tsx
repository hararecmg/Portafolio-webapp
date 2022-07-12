import { useMainMenu } from '../../hooks/useMainMenu';


export const BurguerMenuMovil = () => {

    const { handleOpenMainMenu, open } = useMainMenu('');

    return (
        <div 
            className='menu-movil__neon'
            onClick={handleOpenMainMenu}
        >
            {
                !open &&
                <div className='menu-movil__burger'>
                    <svg 
                        xmlns='http://www.w3.org/2000/svg' 
                        className='icon icon-tabler icon-tabler-menu-2'
                        width= '3rem'
                        height= '3rem' 
                        viewBox='0 0 24 24'
                        strokeWidth='1.5' 
                        fill='none' 
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    >
                        <path stroke='none' d='M0 0h24v24H0z' fill='none'/>
                        <line x1='4' y1='6' x2='20' y2='6' />
                        <line x1='4' y1='12' x2='20' y2='12' />
                        <line x1='4' y1='18' x2='20' y2='18' />
                    </svg>
                </div>
            }
            {
                open &&
                <div className='menu-movil__button'>
                    <svg 
                        xmlns='http://www.w3.org/2000/svg' 
                        className='icon icon-tabler icon-tabler-arrow-forward' 
                        viewBox='0 0 24 24' 
                        strokeWidth='1.5' 
                        fill='none' 
                        strokeLinecap='round' 
                        strokeLinejoin='round'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' fill='none'/>
                      <path d='M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1' />
                    </svg>
                </div>
            }
        </div>
    )
}