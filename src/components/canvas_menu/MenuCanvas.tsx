import { useAppSelector } from '../../hooks';
import { Tooltip } from '../tooltip';
import { ButtonCanvas } from './canvas';
// import { Curriculum } from './canvas';
import { OffCanvasProfile } from '../picture_frames';
import { Title } from './canvas';
import { ContactLinks } from './contact';


export const MenuCanvas = () => {

    const { open, loading } = useAppSelector(state => state.offCanvas);
    
    return (
        <div
            className='off-canvas'
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
                checked={open}
                readOnly
            />
            <nav className='off-canvas__nav'>
                <Tooltip />
                <ButtonCanvas />
                <OffCanvasProfile />
                <Title />
                <ContactLinks />
            </nav>
        </div>
    )
}