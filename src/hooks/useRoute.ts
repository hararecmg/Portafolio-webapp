import { changeRoute } from '../app/slices';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import { Route } from '../typescript/interfaces/redux';


export const useRoute = (routeCurrent: Route) => {

    const dispatch = useAppDispatch();
    const { route, alternate } = useAppSelector(state => state.route);

    const handleClickRoute = (): void => {
        dispatch( changeRoute({
            route: routeCurrent 
        }))
    }

    return {
        route, 
        alternate, 
        handleClickRoute 
    };
}