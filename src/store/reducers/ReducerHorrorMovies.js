import { FETCH_HORROR_MOVIES } from '../actions/Index';

export default function (state = [], action) {
	switch (action.type) {
		case FETCH_HORROR_MOVIES:
			return {
				...state,
				movies: action.data,
			};
		default:
			return state;
	}
}
