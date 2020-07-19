import axios from 'axios';

export const FETCH_TRENDING = 'FETCH_TRENDING';
export const FETCH_TOP_RATED = 'FETCH_TOP_RATED';
export const FETCH_ACTION_MOVIES = 'FETCH_ACTION_MOVIES';
export const FETCH_COMEDY_MOVIES = 'FETCH_COMEDY_MOVIES';
export const FETCH_HORROR_MOVIES = 'FETCH_HORROR_MOVIES';
export const FETCH_ROMANCE_MOVIES = 'FETCH_ROMANCE_MOVIES';
export const FETCH_DOCUMENTARIES = 'FETCH_DOCUMENTARIES';

const API_KEY = '887ae0880ad846d24f3dd78103bd8d7d';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendData = (data) => {
	return {
		type: FETCH_TRENDING,
		data,
	};
};

export const fetchTrending = () => {
	return (dispatch) => {
		return axios
			.get(`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`)
			.then((response) => {
				dispatch(fetchTrendData(response.data));
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const fetchTopData = (data) => {
	return {
		type: FETCH_TOP_RATED,
		data,
	};
};

export function fetchTopRated() {
	return (dispatch) => {
		return axios
			.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`)
			.then((response) => {
				dispatch(fetchTopData(response.data));
			})
			.catch((error) => {
				throw error;
			});
	};
}

export const fetchActionData = (data) => {
	return {
		type: FETCH_ACTION_MOVIES,
		data,
	};
};

export const fetchActionMovies = () => {
	return (dispatch) => {
		return axios
			.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US`)
			.then((response) => {
				dispatch(fetchActionData(response.data));
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const fetchComedyData = (data) => {
	return {
		type: FETCH_COMEDY_MOVIES,
		data,
	};
};

export function fetchComedyMovies() {
	return (dispatch) => {
		return axios
			.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`)
			.then((response) => {
				dispatch(fetchComedyData(response.data));
			})
			.catch((error) => {
				throw error;
			});
	};
}

export const fetchHorrorData = (data) => {
	return {
		type: FETCH_HORROR_MOVIES,
		data,
	};
};

export function fetchHorrorMovies() {
	return (dispatch) => {
		return axios
			.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`)
			.then((response) => {
				dispatch(fetchHorrorData(response.data));
			})
			.catch((error) => {
				throw error;
			});
	};
}

export const fetchRomanceData = (data) => {
	return {
		type: FETCH_ROMANCE_MOVIES,
		data,
	};
};

export function fetchRomanceMovies() {
	return (dispatch) => {
		return axios
			.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`)
			.then((response) => {
				dispatch(fetchRomanceData(response.data));
			})
			.catch((error) => {
				throw error;
			});
	};
}

export const fetchDocumentData = (data) => {
	return {
		type: FETCH_DOCUMENTARIES,
		data,
	};
};

export function fetchDocumentaries() {
	return (dispatch) => {
		return axios
			.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`)
			.then((response) => {
				dispatch(fetchDocumentData(response.data));
			})
			.catch((error) => {
				throw error;
			});
	};
}
