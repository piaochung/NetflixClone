import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDocumentaries } from '../store/actions/Index';
import Movie from '../components/Movie';

const DocumentaryContainer = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchDocumentaries());
	}, []);

	const documentaryData = useSelector((state) => state.documentary.movies, []) || [];

	return (
		<div>
			<h1>Documentary Movies</h1>
			<div style={{ display: 'flex' }}>
				{documentaryData.results &&
					documentaryData.results.map((movie) => <Movie props={movie} key={movie.id} />)}
			</div>
		</div>
	);
};

export default DocumentaryContainer;
