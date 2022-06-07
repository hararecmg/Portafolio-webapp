import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { AppMain } from '../home';
import { MovieApp } from '../movies';
// import { MainNavbar } from '.';

export const AppRouter = () => {

    return (
        <Router>
            
            {/* <MainNavbar /> */}
            
            <Routes>
                <Route
                    path='/'
                    element={ <AppMain /> } 
                />
                <Route
                    path='/movie'
                    element={ <MovieApp /> } 
                />
            </Routes>
        </Router>
    )
}