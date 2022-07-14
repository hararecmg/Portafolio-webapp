import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Ramdom } from './ramdom' 
import { useRoute } from '../../hooks';
import { useEffect } from 'react';
import { Home } from './home';


export const DashboardRoutes = () => {

    const { route } = useRoute('');
    const navigate = useNavigate();
    const { pathname, search } = useLocation();

    useEffect(() => {

        const location = pathname + search;
        const condition = location === '/home' || location === '/ramdom'
            || location === '/search' || location === '/favorites';
        
        condition
            ? navigate(`/${ route }`, {
                replace: true
            })
            : navigate('/home', {
                replace: true
            });
            
    }, [route, pathname, search, navigate]);
    
    return (
        <Routes>
            <Route
                path='home'
                element={ <Home /> } 
            />
            <Route
                path='ramdom'
                element={ <Ramdom /> } 
            />
        </Routes>
    )
}