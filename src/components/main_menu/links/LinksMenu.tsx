import { FavoriteLink } from './FavoriteLink';
// import { SearchLink } from './SearchLink';
import { RamdomLink } from './RamdomLink';
import { HomeLink } from './HomeLink';


export const LinksMenu = () => {

    return (
        <nav className='main-menu__links-menu'>
            <ul className='main-menu__links-list'>
                <HomeLink />
                <RamdomLink />
                {/* <SearchLink /> */}
                <FavoriteLink />
            </ul>
        </nav>
    )
}