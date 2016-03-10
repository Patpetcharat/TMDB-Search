import React from 'react'
import ReactDOM from 'react-dom'
import TweenMax from 'gsap'

export default class SearchBar extends React.Component {
	componentDidMount(){
		this.fullPageContainer = ReactDOM.findDOMNode(this.refs.fullPageContainer);
		console.log('fullPageContainer:', this.fullPageContainer);	
	}

	componentWillEnter(callback){
		TweenMax.set(this.fullPageContainer, {opacity:0, onComplete:callback});
	}

	componentDidEnter(){
		TweenMax.to(this.fullPageContainer, 1, {opacity:1});
	}

	componentWillLeave(callback){
		console.log('will leave');

		TweenMax.to(this.fullPageContainer, 1, {opacity:0, onComplete:callback});
	}
	render() {
		const { searchTerm, pageNumber } = this.props.params
		return (
			<div ref="fullPageContainer" className="fullPageContainer">
				<h2>searchTerm: {searchTerm}</h2>
				<h2>pageNumber: {pageNumber}</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at nisi tristique, faucibus leo faucibus, iaculis justo. Sed erat velit, rutrum sed risus sed, lacinia sodales eros. Aenean faucibus magna a quam tempor, quis accumsan mi rhoncus. Aliquam tincidunt suscipit velit, sit amet eleifend dui interdum eget. Sed imperdiet ligula sed leo dapibus, ac sagittis odio vehicula. Pellentesque feugiat purus vitae elit convallis, vitae fermentum justo faucibus. Aliquam tincidunt dolor tortor, sed ullamcorper erat dignissim id. Phasellus ultricies urna nunc, vel euismod ligula maximus et. Nulla facilisi. Nullam a sem viverra, elementum tellus a, sollicitudin massa. Phasellus quis ornare ligula.
				</p>
				<p>Vivamus blandit nec odio at viverra. Donec sollicitudin erat sit amet arcu gravida faucibus. Phasellus luctus sed est ac scelerisque. Donec finibus libero ut enim luctus, id maximus lacus suscipit. Duis iaculis ante vitae commodo aliquam. Duis nec laoreet eros. Vestibulum nulla dolor, volutpat et vestibulum ut, condimentum at ligula. Aenean id nisl vitae risus semper elementum. Mauris id libero at elit pulvinar ornare.
				</p>
				<p>Nunc ac dolor ut massa finibus lobortis. Morbi lectus mauris, cursus et sollicitudin dignissim, iaculis sit amet ligula. Duis est eros, interdum at quam a, sollicitudin accumsan ex. Duis nisi nisl, convallis vitae laoreet ac, viverra vitae neque. Vivamus tempus, sapien in tempus convallis, nisl erat ornare ex, suscipit ornare purus sem vel sem. Nulla placerat molestie commodo. Quisque ornare ante in ex cursus, blandit laoreet lorem tempor. Sed dictum rutrum velit in suscipit. Maecenas in egestas mauris. Nunc eget dui sit amet mauris feugiat varius. Phasellus id ipsum dictum, rutrum lacus vel, euismod nulla.
							</p>
			</div>
		)
	}
}