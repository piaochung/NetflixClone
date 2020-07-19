import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopRated } from '../store/actions/Index';
import Movie from '../components/Movie';
import Slider from 'react-slick';

const TopRatedContainer = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTopRated());
	}, []);

	const topRatedData = useSelector((state) => state.topRated.movies, []) || [];

	return (
		<div>
			<h1>Top Rated Movies</h1>
			<div style={{ display: 'flex' }}>
				{topRatedData.results && topRatedData.results.map((movie) => <Movie props={movie} key={movie.id} />)}
			</div>
		</div>
	);
};

export default TopRatedContainer;
