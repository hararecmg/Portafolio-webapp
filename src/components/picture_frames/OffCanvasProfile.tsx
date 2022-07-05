// import { useEffect } from 'react';
// import { useMainMenu } from '../../hooks';
// import { useAppSelector } from '../../hooks';
// import { useAppDispatch } from '../../hooks';


export const OffCanvasProfile = () => {

    // const {
    //     handleMouseOverMainMenu,
    //     handleMouseOutMainMenu,
    // } = useMainMenu('perfil');
    
    // const { profile_checket, loading_style } =  useAppSelector(state => state.mainMenu);
    // const dispatch = useAppDispatch();

    // useEffect(() => {
        
    //     if (profile_checket) {
    //         dispatch(loadStyleThunks(0.42));
    //     }
        
    // }, [dispatch, profile_checket])
    

    return (
        <div className='off-canvas__profile'>
            <div className='off-canvas__image'>
                <img
                    src={'https://avatars.githubusercontent.com/u/99056317?v=4'}
                    alt='imagen de perfil'
                />
            </div>
        </div>
    )
}
// https://api.github.com/users/Hararec-Medina-Gonzalez