import { useOffCanvas } from '../../../hooks';


export const LinkedinLink = () => {

    const {
        handleMouseOverCanvas,
        handleMouseOutCanvas,
    } = useOffCanvas('linkedin');

    return (
        <li 
            className='off-canvas__link'
            onMouseOver={handleMouseOverCanvas}
            onMouseOut={handleMouseOutCanvas}
        >
            <a 
                href='https://www.linkedin.com/in/hararec-medina-gonz%C3%A1lez-980152211/'
                className='off-canvas__anchor'
                target='_blank'
                rel='noreferrer'
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-brand-linkedin'
                    width= '8vh'
                    height= '8vh'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'/>
                    <rect x='4' y='4' width='16' height='16' rx='2' />
                    <line x1='8' y1='11' x2='8' y2='16' />
                    <line x1='8' y1='8' x2='8' y2='8.01' />
                    <line x1='12' y1='16' x2='12' y2='11' />
                    <path d='M16 16v-3a2 2 0 0 0 -4 0' />
                </svg>
            </a>
        </li>
    )
}