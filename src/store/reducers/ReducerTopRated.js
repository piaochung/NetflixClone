import { FETCH_TOP_RATED } from '../actions/Index';

export default function (state = [], action) {
	switch (action.type) {
		case FETCH_TOP_RATED:
			return {
				...state,
				movies: action.data,
			};
		default:
			return state;
	}
}
