import { LinksMenu } from './links';
import { MainMenuProfile } from '../picture_frames';
import { useAppSelector } from '../../hooks';
import { Tooltip } from '../tooltip';
import { BurguerMenuMovil } from '../menu_movil';


export const MainMenu = () => {

    const { open } = useAppSelector(state => state.offCanvas);

    return (
        <div className='main-menu'>
            <input
                type='checkbox'
                readOnly
                checked={
                    open
                        ? true
                        : false
                }
            />
            <nav className='main-menu__nav'>
                <MainMenuProfile />
                <LinksMenu />
                <BurguerMenuMovil />
            </nav>
                
                { !open && <Tooltip /> }
                
        </div>
    )
}