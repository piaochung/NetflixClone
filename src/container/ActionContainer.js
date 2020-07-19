import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchActionMovies } from '../store/actions/Index';
import Movie from '../components/Movie';

const ActionContainer = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchActionMovies());
	}, []);

	const actionData = useSelector((state) => state.action.movies, []) || [];

	return (
		<div>
			<h1>Action Movies</h1>
			<div style={{ display: 'flex' }}>
				{actionData.results && actionData.results.map((movie) => <Movie props={movie} key={movie.id} />)}
			</div>
		</div>
	);
};

export default ActionContainer;
