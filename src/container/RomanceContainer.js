import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRomanceMovies } from '../store/actions/Index';
import Movie from '../components/Movie';

const RomanceContainer = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchRomanceMovies());
	}, []);

	const romanceData = useSelector((state) => state.romance.movies, []) || [];

	return (
		<div>
			<h1>Romance Movies</h1>
			<div style={{ display: 'flex' }}>
				{romanceData.results && romanceData.results.map((movie) => <Movie props={movie} key={movie.id} />)}
			</div>
		</div>
	);
};

export default RomanceContainer;
