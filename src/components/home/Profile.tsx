import { NavLink } from 'react-router-dom';

export const Profile = () => {

    return (
        <div className='profile'>
            <img
                className='img-fluid rounded-circle' 
                src='../assets/IMG_20210901_152703 (1).jpg'
                alt=''
            />
            <h1
                className='text-light'
            >
                <NavLink 
                    className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                    to='/'
                >
                    Hararec Medina
                </NavLink>
            </h1>
            <div className='social-links mt-3 text-center'>
                <a
                    href='https://github.com/Hararec-Medina-Gonzalez'
                    target={ '_blank' }
                    className='github'
                    rel='noreferrer'
                >
                    <i className='bx bxl-github'></i>
                </a>
                <a
                    href='https://www.linkedin.com/in/hararec-medina-gonz%C3%A1lez-980152211'
                    target={ '_blank' }
                    className='linkedin'
                    rel='noreferrer'
                >
                    <i className='bx bxl-linkedin'></i>
                </a>
            </div>
        </div>
    //     <article id="top" class="wrapper style1">
    //     <div class="container">
    //         <div class="row">
    //             <div class="col-4 col-5-large col-12-medium">
    //                 <span class="image fit"><img src="images/pic00.jpg" alt="" /></span>
    //             </div>
    //             <div class="col-8 col-7-large col-12-medium">
    //                 <header>
    //                     <h1>Hi. I'm <strong>Jane Doe</strong>.</h1>
    //                 </header>
    //                 <p>And this is <strong>Miniport</strong>, a free, fully responsive HTML5 site template designed by <a href="http://twitter.com/ajlkn">AJ</a> for <a href="http://html5up.net">HTML5 UP</a> &amp; released under the <a href="http://html5up.net/license">CCA license</a>.</p>
    //                 <a href="#work" class="button large scrolly">Learn about what I do</a>
    //             </div>
    //         </div>
    //     </div>
    // </article>
    )
}