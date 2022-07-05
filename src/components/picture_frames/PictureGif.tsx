import { RamdomGif } from '../../typescript/interfaces/redux';
import { useAppSelector } from '../../hooks';
import { useFavorites } from '../../hooks';


export const PictureGif = (props: RamdomGif) => {

    const { loading, status } = useAppSelector(state => state.ramdom);
    const { handleAddFavorite, favorites } = useFavorites(props);

    return (
        <div className='picture'>
            <div className={
                    loading
                        ? 'picture__loading'
                        : (status === 'fulfilled')
                            ? 'picture__image'
                            : 'picture__loading'
                }
            >
                {
                    (status === 'fulfilled') &&
                             <img
                                src={`${ props.downsized_small.mp4 }`}
                                srcSet={
                                    `${props.downsized_medium.url} 480w, 
                                    ${props.downsized_large.url} 800w`
                                } 
                                alt={`${props.title}`}
                            />
                }
            </div>
                {
                    ( status === 'fulfilled' ) &&
                    <div
                        className='picture__favorite'
                        onClick={handleAddFavorite}
                    >
                        <div
                            className={
                                favorites.includes( props)
                                    ? 'picture__favorite--pulses'
                                    : 'picture__favorite--heart'
                            }
                        ></div>
                    </div>
                }
        </div>
    )
}