import { useRamdom } from '../../../hooks';
import { RamdomCarousel } from './RamdomCarousel';


export const Ramdom = () => {

    const { ramdom } = useRamdom();

    return (
        <div className='ramdom'>
            {
                ramdom.map( item =>
                    <RamdomCarousel 
                        key={ item.response_id }
                        { ...item }
                    />
                )
            }

        </div>
    )
}