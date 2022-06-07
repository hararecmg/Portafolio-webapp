import { Movies } from './appInterfaces';

export interface MovieState extends MoviePayload {
    loading: boolean;
}

export interface MoviePayload {
    movies: Array<Movies>;
    page: number;
    status: 'initial'|'pending'|'fulfilled'|'rejected';
}