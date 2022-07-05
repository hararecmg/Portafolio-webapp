import { FavoriteLink } from './FavoriteLink';
import { SearchLink } from './SearchLink';
import { RamdomLink } from './RamdomLink';


export const LinksMenu = () => {

    //code

    return (
        <nav className='main-menu__links-menu'>
            <ul className='main-menu__links-list'>
                <RamdomLink />
                <SearchLink />
                <FavoriteLink />
            </ul>
        </nav>
    )
}