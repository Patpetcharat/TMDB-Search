import React from 'react'
import ReactDOM from 'react-dom'
import TweenMax from 'gsap'
import $ from 'jquery'

import Movie from './Movie'
import Pagination from './Pagination'

export default class SearchBar extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			data: {
				results: []
			}
		}
	}

	componentDidMount(){
		// Get the DOM object for animating with Greensock
		this.fullPageContainer = ReactDOM.findDOMNode(this.refs.fullPageContainer);

		// Make the API request
		const { searchTerm, pageNumber } = this.props.params;

		const api_url = "http://api.themoviedb.org/3/search/movie?api_key=42b3e60b6636f50062f6d3579100d83f&query=";

		let request_url = api_url + encodeURIComponent(searchTerm);

		if(pageNumber){
			request_url += "&page=";
			request_url += pageNumber;
		}

		$.get(request_url, (res)=>{
			this.state.data = res;
			this.setState(this.state);

			console.log('data:', this.state);
		});
	}

	componentWillEnter(callback){
		TweenMax.set(this.fullPageContainer, {opacity:0, onComplete:callback});
	}

	componentDidEnter(){
		TweenMax.to(this.fullPageContainer, 1, {opacity:1});
	}

	componentWillLeave(callback){
		TweenMax.to(this.fullPageContainer, 1, {opacity:0, onComplete:callback});
	}
	render() {
		// TEST
		const { searchTerm, pageNumber } = this.props.params 

		let resultNodes = this.state.data.results.map(movie => {
			return (
				<Movie data={movie} key={movie.id} />
			);
		});

		return (
			<div ref="fullPageContainer" id="Search" className="fullPageContainer">
				<h2>searchTerm: {searchTerm}</h2>
				<h2>pageNumber: {pageNumber}</h2>

				{resultNodes}

				<Pagination totalPages={this.state.data.total_pages} currentPage={pageNumber}/>
			</div>
		)
	}
}