import { Action } from '@ngrx/store';
import { Movie } from '../../models/movie.model';

export enum EMovieActionTypes {
    SET_NOW_PLAYING_MOVIES = '[ Movie ] Set now playing movies',
    SET_UPCOMING_MOVIES = '[ Movie ] Set up coming movies',
    SET_CAST_AND_CREW = '[ Movie ] Set Credits',
    SET_THEATERS = '[ Theaters ] Set Theaters',
    SET_GENRE = '[ Genre ] Set Genre'
}

export class SetNowPlayingMovies implements Action {
    readonly type = EMovieActionTypes.SET_NOW_PLAYING_MOVIES;

    constructor(public payload: Movie[]) { }
}
export class SetUpcomingMovies implements Action {
    readonly type = EMovieActionTypes.SET_UPCOMING_MOVIES;

    constructor(public payload: Movie[]) { }
}
export class SetCastAndCrew implements Action {
    readonly type = EMovieActionTypes.SET_CAST_AND_CREW;

    constructor(public payload: any) { }
}

export class SetTheaters implements Action {
    readonly type = EMovieActionTypes.SET_THEATERS;

    constructor(public payload: any) {}
}
export class SetGenre implements Action {
    readonly type = EMovieActionTypes.SET_GENRE;

    constructor(public payload: any) {}
}
export type MovieActionTypes = SetNowPlayingMovies | SetUpcomingMovies| SetCastAndCrew | SetTheaters | SetGenre;
