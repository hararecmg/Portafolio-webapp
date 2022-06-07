import { NavLink } from 'react-router-dom';

export const LateralMenu = () => {

    return (
        <nav id='navbar' className='nav-menu navbar'>
            <ul>
                <li>
                    <NavLink 
                        className={ ({ isActive }) => 'nav-link scrollto' + (isActive ? 'active' : '') }
                        to='/'
                    >
                        <i className='bx bx-home'></i>
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className={ ({ isActive }) => 'nav-link scrollto' + (isActive ? 'active' : '') }
                        to='/movie'
                    >
                        <i className='bx bx-user'></i>
                        <span>Movies</span>
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink 
                        className={ ({ isActive }) => 'nav-link scrollto' + (isActive ? 'active' : '') }
                        to='/'
                    >
                        <i className='bx bx-file-blank'></i>
                        <span>Resume</span>
                    </NavLink>
                </li> */}
            </ul>
            {/* <section id="sidebar">
                <div className="inner">
                    <nav>
                        <ul>
                            <li><a href="#intro">Welcome</a></li>
                            <li><a href="#one">Who we are</a></li>
                            <li><a href="#two">What we do</a></li>
                            <li><a href="#three">Get in touch</a></li>
                        </ul>
                    </nav>
                </div>
            </section> */}
        </nav>
    )
}
