import React from 'react'

export default class Movie extends React.Component {
	constructor(props){
		super(props);

	}

	render() {
		let poster_image_url = `http://image.tmdb.org/t/p/w154${this.props.data.poster_path}`;
		let poster_img_style = {
			backgroundImage: 'url(' + poster_image_url + ')'
		};
		
		return (
			<div className="movie" key={this.props.data.id}>
				<div className="poster">
					<div className="poster_img" style={poster_img_style}></div>
				</div>
				<div className="title">{this.props.data.title}</div>
			</div>
		)
	}
}