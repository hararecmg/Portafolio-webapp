import { useRoute } from '../../../hooks';
import { useEffect } from 'react';
import { alternateThunk } from '../../../app/thunks';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { changeAlternate } from '../../../app/slices';
export const Home = () => {

    const { alternate } = useRoute('');
    const dispatch = useAppDispatch();

    useEffect(() => {
      
        dispatch( alternateThunk());

        const interval = setInterval(() => {
            
            dispatch( alternateThunk() );
                
        }, 6000);

        return () => {
            clearInterval(interval);
            dispatch( changeAlternate({
                alternate: false,
            }));
        }
        
    }, [dispatch])
    
    return (
        <div className='home'>
            <div className='home__container'>
                <div className='home__name'>
                    Hararec Medina González
                </div>
                <div className='home__developer'>
                    Desarrollador&#160; 
                    <div>
                        { alternate ? 'Frontend.' : 'Backend .' }
                        <span>&#160;</span>
                    </div>
                </div>
                {/* <ul className='home__knowledge'>
                    <li><span>HTML</span></li>
                    <li><span>CSS</span></li>
                    <li><span>Javascript</span></li>
                    <li><span>SASS</span></li>
                    <li><span>React</span></li>
                    <li><span>TypeScript</span></li>
                    <li><span>Redux</span></li>
                    <li><span>Python</span></li>
                    <li><span>Django</span></li>
                    <li><span>MySql</span></li>
                    <li><span>Postgresql</span></li>
                    <li><span>PowerShell</span></li>
                    <li><span>Bash</span></li>
                </ul> */}
            </div>
        </div>
    )
}