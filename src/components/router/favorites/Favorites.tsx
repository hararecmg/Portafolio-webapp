import { useAppSelector } from '../../../hooks';
import { PictureGif } from '../../picture_frames';
// import { useEffect } from 'react';
// import { useAppDispatch } from '.';


export const Favorites = () => {

    const { favorites } = useAppSelector(state => state.favorite);
    // const dispatch = useAppDispatch();

    // useEffect(() => {
        
    //     dispatch()
        
    // }, [favorites]);
    

    return (
        <div className='favorites'>
            {
                favorites.map( gif =>
                    <PictureGif
                        key={ gif.id }
                        { ...gif }
                    />
                )
            }
        </div>
    )
}