import React from 'react';
import Slider from 'react-slick';

const Movie = (props) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidersToShow: 1,
		sliderToScroll: 1,
	};

	console.log(props);
	return (
		<Slider {...settings}>
			<div style={{ display: 'inline' }}>
				<img src={`https://image.tmdb.org/t/p/w200/${props.props.poster_path}`} alt={props.props.id} />
			</div>
		</Slider>
	);
};

export default Movie;
