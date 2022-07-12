import { useMainMenu } from '../../hooks/useMainMenu';
import { RamdomLink } from './links';
import { ProfileLink } from './links';
import { SearchLink } from './links';
import { FavoriteLink } from './links';


export const MenuMovil = () => {

    const { open, loading } = useMainMenu('');

    return (
        <nav 
            className='menu-movil'
            style={{
                zIndex: open
                        ? 998 
                        : loading
                            ? 998
                            :0
            }}
        >
            <input
                type='checkbox'
                checked={ open }
                readOnly
            />
            <nav className='menu-movil__nav'>
                <ul className='menu-movil__container'>
                    <ProfileLink />
                    <RamdomLink />
                    <SearchLink />
                    <FavoriteLink />
                </ul>
            </nav>
        </nav>
    )
}