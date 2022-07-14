import { addFavorite } from '../app/slices';
// import { RamdomGif } from '../typescript/interfaces/redux';
import { useAppSelector, useAppDispatch } from './reduxHooks';
import { RamdomGif } from '../typescript/interfaces/redux/trendingInterfaces';


export const useFavorites = (gifItem: RamdomGif) => {

    const dispatch = useAppDispatch();
    const { favorites } = useAppSelector(state => state.favorite);

    const handleAddFavorite = (): void => {
        
        const someTest = (f: RamdomGif) => (

            f.downsized_small.mp4 === gifItem.downsized_small.mp4 ||
            f.downsized_medium.url === gifItem.downsized_medium.url ||
            f.downsized_large.url === gifItem.downsized_large.url
        );

        favorites.some(someTest)
            ? dispatch(addFavorite({
                favorites: favorites.filter(f => (
                    someTest(f) === false || f !== gifItem
                ))
            }))
            : dispatch(addFavorite({
                favorites: [...favorites, gifItem]
            }))
    }

    return { handleAddFavorite, favorites }
}