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
					<div className="info">
						<div className="label_release_date"><b>Release date:</b></div>
						<div className="release_date">{this.props.data.release_date}</div>
						<br/>
						<div className="label_vote_average"><b>Vote Average:</b></div>
						<div className="vote_average">{this.props.data.vote_average}</div>
					</div>
				</div>
				<div className="title">{this.props.data.title}</div>
			</div>
		)
	}
}