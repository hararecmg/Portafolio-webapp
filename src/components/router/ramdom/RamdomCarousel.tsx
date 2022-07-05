import { RamdomData } from '../../../typescript/interfaces/redux';
import { PictureGif } from '../../picture_frames';


export const RamdomCarousel = (item: RamdomData) => {

    const { gifs } = item;    

    return (
        <div className='ramdom__carousel'>
            {
                gifs.map( gif =>
                    <PictureGif
                        key={ gif.id }
                        { ...gif }
                    />
                )
            }
        </div>
    )
}