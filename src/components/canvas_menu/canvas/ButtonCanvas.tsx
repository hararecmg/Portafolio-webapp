import { useOffCanvas } from '../../../hooks';


export const ButtonCanvas = () => {

    const {
        handleMouseOverCanvas,
        handleMouseOutCanvas,
        handleOpenCanvas,
    } = useOffCanvas('button');

    return (
        <button
            onMouseOver={handleMouseOverCanvas}
            onMouseOut={handleMouseOutCanvas}
            onClick={ handleOpenCanvas }
            className='off-canvas__button'
        >
            <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-arrow-back'
                // width='60'
                // height='60'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                // stroke='#a905b6'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none'/>
              <path d='M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1' />
            </svg>
        </button>
    )
}