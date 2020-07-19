import { FETCH_DOCUMENTARIES } from '../actions/Index';

export default function (state = [], action) {
	switch (action.type) {
		case FETCH_DOCUMENTARIES:
			return {
				...state,
				movies: action.data,
			};
		default:
			return state;
	}
}
