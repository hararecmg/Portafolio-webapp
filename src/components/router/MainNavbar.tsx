import { Link, NavLink } from 'react-router-dom';

export const MainNavbar = () => {
    
    return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
            
            <Link 
                className='navbar-brand' 
                to='/'
            >
                Home
            </Link>

            <div className='navbar-collapse'>
                <div className='navbar-nav'>

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to='/movie'
                    >
                        Movies
                    </NavLink>
                </div>
            </div>

            {/* <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
                <ul className='navbar-nav ml-auto'>

                    <button 
                        className='nav-item nav-link btn' 
                        onClick={ handleLogin }
                    >
                        Iniciar Seción
                    </button>
                </ul>
            </div> */}
        </nav>
    )
}