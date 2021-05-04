import { MovieActionTypes, EMovieActionTypes } from '../actions/home.action';
import { Movie } from '../../models/movie.model';
import { Theater } from '../../models/theater.model';
import { Genre } from '../../models/genre.model';
export interface MoviesState {
    nowPlayingMovies: Movie[];
    upcomingMovies: Movie[];
    setTheaters: Theater[];
    setGenre: Genre[];
}

export const initialMovieState: MoviesState = {
    nowPlayingMovies: [],
    upcomingMovies: [],
    setTheaters: [],
    setGenre: []
};

export function moviesReducer(state = initialMovieState, action: MovieActionTypes) {
    switch (action.type) {
        case EMovieActionTypes.SET_NOW_PLAYING_MOVIES: {
            // const objOfMovies = action.payload.reduce((o, movie) => ({ ...o, [movie.id]: movie }), {});
            // const newMovies: { [key: number]: Movie } = { ...state.nowPlayingMovies, ...objOfMovies };
            const newNowPlayingMovies: Movie[] = [...state.nowPlayingMovies];
            newNowPlayingMovies.push(...action.payload);
            return {
                ...state,
                nowPlayingMovies: newNowPlayingMovies
            };
        }
        case EMovieActionTypes.SET_UPCOMING_MOVIES: {
            // const objOfMovies = action.payload.reduce((o, movie) => ({ ...o, [movie.id]: movie }), {});
            // const newUpcomingMovies: { [key: number]: Movie } = { ...state.upcomingMovies, ...objOfMovies };
            const newUpcomingMovies: Movie[] = [...state.upcomingMovies];
            newUpcomingMovies.push(...action.payload);
            return {
                ...state,
                upcomingMovies: newUpcomingMovies
            };
        }
        case EMovieActionTypes.SET_CAST_AND_CREW: {
            const newNowPlayingMovieState = { ...state.nowPlayingMovies };
            const newUpcomingMovieState = { ...state.upcomingMovies };

            if (state.nowPlayingMovies[action.payload.id]) {
                newNowPlayingMovieState[action.payload.id].casts = action.payload.cast;
                newNowPlayingMovieState[action.payload.id].crews = action.payload.crew;
            }
            if (state.upcomingMovies[action.payload.id]) {
                newUpcomingMovieState[action.payload.id].casts = action.payload.cast;
                newUpcomingMovieState[action.payload.id].crews = action.payload.crew;
            }
            return {
                ...state,
                nowPlayingMovies: newNowPlayingMovieState,
                upcomingMovies: newUpcomingMovieState
            };
        }
        case EMovieActionTypes.SET_THEATERS: {
            const newSetTheatersState = action.payload;
            return {
                ...state,
                setTheaters: newSetTheatersState
            };
        }
        case EMovieActionTypes.SET_GENRE: {
            const newSetGenreState = action.payload;
            return {
                ...state,
                setGenre: newSetGenreState
            };
        }
        default:
            return state;
    }
}
