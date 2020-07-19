import { combineReducers } from 'redux';
import TrendingReducer from './ReducerTrending';
import TopRatedReducer from './ReducerTopRated';
import ActionMoviesReducer from './ReducerActionMovies';
import ComedyMoviesReducer from './ReducerComedyMovies';
import HorrorMoviesReducer from './ReducerHorrorMovies';
import RomanceMoviesReducer from './ReducerRomanceMovies';
import DocumentaryReducer from './ReducerDocumentary';

const rootReducer = combineReducers({
	trending: TrendingReducer,
	topRated: TopRatedReducer,
	action: ActionMoviesReducer,
	comedy: ComedyMoviesReducer,
	horror: HorrorMoviesReducer,
	romance: RomanceMoviesReducer,
	documentary: DocumentaryReducer,
});

export default rootReducer;
