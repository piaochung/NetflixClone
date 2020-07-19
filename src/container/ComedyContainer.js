import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComedyMovies } from '../store/actions/Index';
import Movie from '../components/Movie';

const ComedyContainer = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchComedyMovies());
	}, []);

	const comedyData = useSelector((state) => state.comedy.movies, []) || [];

	return (
		<div>
			<h1>Comedy Movies</h1>
			<div style={{ display: 'flex' }}>
				{comedyData.results && comedyData.results.map((movie) => <Movie props={movie} key={movie.id} />)}
			</div>
		</div>
	);
};

export default ComedyContainer;
