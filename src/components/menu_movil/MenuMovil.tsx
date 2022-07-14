import { useRoute } from '../../hooks/useRoute';
import { useMainMenu } from '../../hooks/useMainMenu';
import { RamdomLink } from './links';
import { SearchLink } from './links';
import { FavoriteLink } from './links';


export const MenuMovil = () => {

    const { open, loading } = useMainMenu('');
    const { route } = useRoute('');

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
            <nav 
                className='menu-movil__nav'
                style={{
                    boxShadow: (route === 'home')
                            ? open
                                ? '-0.5rem 0.5rem 1.5rem 0 rgba(255,255,255,0.75)' 
                                : loading
                                    ? '-0.5rem 0.5rem 1.5rem 0 rgba(255,255,255,0.75)'
                                    : undefined
                            : open
                                ? '-1rem 1rem 2rem 0 rgba(0,0,0,0.75)' 
                                : loading
                                    ? '-1rem 1rem 2rem 0 rgba(0,0,0,0.75)'
                                    : undefined   
                }}
            >
                <ul className='menu-movil__container'>
                    {/* <ProfileLink /> */}
                    <RamdomLink />
                    <SearchLink />
                    <FavoriteLink />
                </ul>
            </nav>
        </nav>
    )
}