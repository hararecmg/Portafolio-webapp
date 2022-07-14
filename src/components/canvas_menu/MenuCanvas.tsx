import { useAppSelector } from '../../hooks';
import { Tooltip } from '../tooltip';
import { ButtonCanvas } from './canvas';
// import { Curriculum } from './canvas';
import { OffCanvasProfile } from '../picture_frames';
import { Title } from './canvas';
import { ContactLinks } from './contact';
import { useRoute } from '../../hooks/useRoute';


export const MenuCanvas = () => {

    const { open, loading } = useAppSelector(state => state.offCanvas);
    const { route } = useRoute('')
    
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
            <nav 
                className='off-canvas__nav'
                style={{
                    boxShadow: (route === 'home')
                            ? open
                                ? '0.25rem 0 1.75rem 0.25rem rgb(255, 255, 255, 0.75)' 
                                : loading
                                    ? '0.25rem 0 1.75rem 0.25rem rgb(255, 255, 255, 0.75)'
                                    : undefined
                            : open
                                ? '0.25rem 0 1.75rem 0.25rem #000' 
                                : loading
                                    ? '0.25rem 0 1.75rem 0.25rem #000'
                                    : undefined   
                }}
            >
                <Tooltip />
                <ButtonCanvas />
                <OffCanvasProfile />
                <Title />
                <ContactLinks />
            </nav>
        </div>
    )
}