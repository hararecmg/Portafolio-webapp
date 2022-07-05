import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { MainMenu } from '../main_menu';
import { MenuCanvas } from '../canvas_menu';
import { Ramdom } from './ramdom';
import { Home } from './Home';
import { useRoute } from '../../hooks/useRoute';


export const AppRouter = () => {

    const { route } = useRoute('');

    return (
        <Router>
            <div className={`router__${route}`}>
                <MainMenu />
                <MenuCanvas />
                <Routes>
                    <Route
                        path='/'
                        element={ <Home /> } 
                    />
                    <Route
                        path='/ramdom'
                        element={ <Ramdom /> } 
                    />
                </Routes>
            </div>
        </Router>
    )
}