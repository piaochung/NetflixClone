import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTrending } from '../store/actions/Index';
import Movie from '../components/Movie';

const TrendContainer = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTrending());
	}, []);

	const TrendData = useSelector((state) => state.trending.movies, []) || [];

	return (
		<div>
			<h1>Trend Movies</h1>

			<div style={{ display: 'flex' }}>
				{TrendData.results && TrendData.results.map((movie) => <Movie props={movie} key={movie.id} />)}
			</div>
		</div>
	);
};

export default TrendContainer;
