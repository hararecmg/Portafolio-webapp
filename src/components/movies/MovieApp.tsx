import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../helpers/hooks";
import { Poster } from '.';
import { movieThunks } from '../../app/thunks';
import { Loading } from '.';
import { NavLink } from 'react-router-dom';

export const MovieApp = () => {

  const dispatch = useAppDispatch();
  const { page, movies, loading } = useAppSelector(state => state.movie);

  useEffect(() => {
    
    dispatch( movieThunks())
  
  }, [dispatch])
  
  return (
      <>
          <div className='contenedor'>
            { loading
              ? <Loading />
              : movies.map( movie => (
                <Poster 
                    key={ movie.id } 
                    { ...movie }
                />
            ))
            }
            <div className='paginacion'>
                    <NavLink 
                        className={ ({ isActive }) => 'nav-link scrollto' + (isActive ? 'active' : '') }
                        to='/'
                    >
                        <i className='bx bx-home'></i>
                        <span>Home</span>
                    </NavLink>
              <button
                onClick={() => dispatch(movieThunks( page - 1))}
              >Anterior</button>
              <button
                onClick={() => dispatch(movieThunks( page + 1))}
              >Siguiente</button>
            </div>
          </div>
      </>
  )
}