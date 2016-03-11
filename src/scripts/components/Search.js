import React from 'react'
import ReactDOM from 'react-dom'
import TweenMax from 'gsap'
import $ from 'jquery'
import GSAP from 'react-gsap-enhancer'

import Movie from './Movie'
import Pagination from './Pagination'

class Search extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			data: {
				results: []
			}
		}
	}

	componentDidMount(){
		// When the component mounts, make the API request
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
		});
	}

	componentWillEnter(callback){
		TweenMax.set(this.fullPageContainer, {opacity:0, onComplete:callback});
	}

	componentDidEnter(){
		TweenMax.to(this.fullPageContainer, 0.4, {opacity:1});
	}

	componentWillLeave(callback){
		TweenMax.to(this.fullPageContainer, 0.4, {opacity:0, onComplete:callback});
	}

	componentDidUpdate(){
		TweenMax.staggerTo('.movie', 0.5, {y:0, opacity:1}, 0.25);
		TweenMax.to('.pagination', 0.5, {opacity:1, delay:0.5});
	}

	render() {
		const { searchTerm, pageNumber } = this.props.params
		let currentPage;
		let isIndex;

		if(pageNumber){
			currentPage = pageNumber;
			isIndex = false;
		}else{
			currentPage = 1;
			isIndex = true;
		}

		let resultNodes = this.state.data.results.map(movie => {
			return (
				<Movie data={movie} key={movie.id} />
			);
		});

		return (
			<div ref={comp => this.fullPageContainer = comp} id="Search" className="fullPageContainer">
				<h2>Search Results for: "{searchTerm}"</h2>

				{resultNodes}

				<Pagination
					totalPages={this.state.data.total_pages} 
					currentPage={currentPage}
					isIndex = {isIndex}/>
			</div>
		)
	}
}

export default GSAP()(Search)