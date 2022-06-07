import { LateralMenu } from './LateralMenu';
import { Profile } from './Profile';
import { Background } from './Background';
import './style.scss';

export const AppMain = () => {

    return (
        <>
            <button className='bi bi-list mobile-nav-toggle d-xl-none'></button>
            <header id='header'>
              <div className='d-flex flex-column'>
                  <Profile />
                  <LateralMenu />
              </div>
            </header>
            <Background />
            {/* <header id="header">
						<h1><a href="index.html">Future Imperfect</a></h1>
						<nav class="links">
							<ul>
								<li><a href="#">Lorem</a></li>
								<li><a href="#">Ipsum</a></li>
								<li><a href="#">Feugiat</a></li>
								<li><a href="#">Tempus</a></li>
								<li><a href="#">Adipiscing</a></li>
							</ul>
						</nav>
						<nav class="main">
							<ul>
								<li class="search">
									<a class="fa-search" href="#search">Search</a>
									<form id="search" method="get" action="#">
										<input type="text" name="query" placeholder="Search" />
									</form>
								</li>
								<li class="menu">
									<a class="fa-bars" href="#menu">Menu</a>
								</li>
							</ul>
						</nav>
					</header> */}
        </>
    )
}