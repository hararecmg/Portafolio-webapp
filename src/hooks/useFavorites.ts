import { addFavorite } from '../app/slices';
import { RamdomGif } from '../typescript/interfaces/redux';
import { useAppSelector, useAppDispatch } from './reduxHooks';


export const useFavorites = (gifItem: RamdomGif) => {

    const dispatch = useAppDispatch();
    const { favorites } = useAppSelector(state => state.favorite);

    const handleAddFavorite = (): void => {
        
        favorites.includes(gifItem)
            ? dispatch(addFavorite({
                favorites: favorites.filter(f => f !== gifItem)
            }))
            : dispatch(addFavorite({
                favorites: [...favorites, gifItem]
            }))
    }

    return { handleAddFavorite, favorites }
}