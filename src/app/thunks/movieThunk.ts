import { startLoadingMovies, setStateMovies } from '../slices';
import { AppDispatch } from '../../helpers/types';
import { movieApi } from '../apis';

// https://api.giphy.com/v1/gifs/search?api_key=GcBNCnf7xECcCaojjkFQVRNhngFy1EFJ&q=${ encodeURI(category) }&limit=9
export const movieThunks = ( page: number = 1 ) => {

    return async ( dispatch: AppDispatch ) => {

        dispatch( startLoadingMovies() );

        try {
            // Promise<AxiosResponse<any, any>>
            const response = await movieApi.get('/popular', {
                params: {
                    api_key: '192e0b9821564f26f52949758ea3c473',
                    language: 'es-MX',
                    page: `${page}`
                },
                // headers:{}
            });
            if (response.status !== 200) {
                throw new Error();
            } else {
                const { data } = response;
                dispatch( setStateMovies({
                        movies: data.results,
                        page: page,
                        status: 'fulfilled',
                    })
                );
            }

        } catch (error) {
            dispatch( setStateMovies({
                movies: [],
                page: page,
                status: 'rejected'
            }));
        }
    }
}