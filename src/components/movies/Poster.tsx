import { Movies } from '../../helpers/interfaces/movie';

export const Poster = ({ poster_path, title }: Movies) => {

    return (
        <>
            <div className='pelicula'>
				<img
                    className='poster'
                    alt= { title }
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                />
				<h3 className='titulo'> {title} </h3>
			</div>
        </>
    )
}