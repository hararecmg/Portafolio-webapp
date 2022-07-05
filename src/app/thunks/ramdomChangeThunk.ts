import { setDataTrendings } from '../slices';
import { AppDispatch, RootState } from '../../typescript/types';
import { RamdomData, RamdomGif } from '../../typescript/interfaces/redux';
import { GifsTrendingDatum } from '../../typescript/interfaces/giphy/gifsTrending';
import { ramdomThunk } from './ramdomThunk';


export const ramdomChangeThunk = () => {

    return async ( dispatch: AppDispatch, getState: () => RootState ) => {

        const { ramdom: { ramdom, off_set, total_data, index } } = getState();
        // const { data } = total_data;
        
        const imageMapping = (image: GifsTrendingDatum): RamdomGif => ({
            original: image.images.original,
            downsized_large: image.images.downsized_large,
            downsized_medium: image.images.downsized_medium,
            downsized_small: image.images.downsized_small,
            embed_url: image.embed_url,
            title: image.title,
            import_datetime: image.import_datetime,
            trending_datetime: image.trending_datetime,
            id: image.id,
        })
        
        const ramdomItem: RamdomData = {
            response_id: `${off_set}--${Math.random() * 10}`,
            gifs: total_data.slice(index, index + 15).map( imageMapping )
        }
        
        total_data.length <= index + 15
            ? dispatch( ramdomThunk())
            : dispatch( setDataTrendings({
                    loading: false,
                    status: 'fulfilled',
                    ramdom: [...ramdom, ramdomItem],
                    off_set: off_set + 15,
                    index: index + 15,
                    total_data,
                })
            )
    }
}