export type Route = 'home' | 'ramdom' | 'search' | 'favorites' | '';

export interface StateRoute extends Alternate {
    route: Route;
}

export interface Alternate {
    alternate?: boolean;
}