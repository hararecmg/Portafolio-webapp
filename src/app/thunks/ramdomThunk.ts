import { setDataTrendings, setLoadingTrendings } from '../slices';
import { AppDispatch } from '../../typescript/types';
import { giphyApi, Giphy } from '../apis';
import { RootState } from '../../typescript/types';
import { ramdomChangeThunk } from './ramdomChangeThunk';


export const ramdomThunk = (type: Giphy = 'gifs') => {

    return async ( dispatch: AppDispatch, getState: () => RootState ) => {

        const { ramdom: { ramdom, total_data, off_set }} = getState();

        dispatch( setLoadingTrendings({
                loading: true,
                status: 'pending'
            })
        );

        try {
            
            const response = await giphyApi(type).get('/trending', {
                params: {
                    api_key: 'GcBNCnf7xECcCaojjkFQVRNhngFy1EFJ',
                    limit: 75,
                    off_set,
                },
            });

            if (response.status !== 200) {
                throw new Error();
            } else {
                
                dispatch( setDataTrendings({
                        ramdom: [...ramdom],
                        loading: false,
                        status: 'fulfilled',
                        total_data: response.data.data,
                        index: 0,
                        off_set,
                    })
                );

                dispatch( ramdomChangeThunk());
            }
            
        } catch (error) {

                dispatch( setDataTrendings({
                    total_data,
                    ramdom,
                    loading: false,
                    status: 'rejected',
                    off_set: 0,
                    index: 0,
                })
            );
        }
    }
}