import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { MainMenu } from '../main_menu';
import { MenuCanvas } from '../canvas_menu';
import { DashboardRoutes } from './DashboardRoutes';
import { useRoute } from '../../hooks/useRoute';
import { MenuMovil } from '../menu_movil/MenuMovil';


export const AppRouter = () => {

    const { route } = useRoute('');

    return (
        <Router>
            <div className={`router__${route}`}>
                <MainMenu />
                <MenuCanvas />
                <MenuMovil />
                <Routes>
                    <Route
                        path='/*'
                        element={ <DashboardRoutes /> } 
                    />
                </Routes>
            </div>
        </Router>
    )
}