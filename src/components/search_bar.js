// import React from 'react';

import React, {Component} from 'react'; // In ES6 way {Component}, means const Component = React.Component;

// const SearchBar = () => {
	// return <input className="form-control"/>; // This will create React.createElement so we need to include React.
// }


// using class components
// In ES6 way use Class
// state is a plain javascript object that exists on any class based component. Each instance of class based component has its own state
class SearchBar extends Component{
	// the first function to execute when a class component is render from index.js
	constructor(props){
		super(props); // including parent prop object using super. If not included error will be thrown
		
		this.state = {term: ''}; // use in constructor only
	}
	
	// each class should have a render function
	render(){
		// return <input onChange={this.onInputChange} className="form-control"/>;
		// return <input onChange={(event) => console.log(event.target.value)} className="form-control"/>;
		
		//// Only update state by calling this.setState
		// whenever a state is set the entire component is re-render
		return (
			<div className="col-md-6 col-md-offset-3">
				<input 
					value = {this.state.term}
					onChange={(event) => this.setSearchTerm(event.target.value)} className="form-control"/>
			</div>
		);
	}
	
	
	setSearchTerm(term){
		this.setState({term}); // in ES6 ways of setting object if both key and value have same name
		this.props.onSearchTermChange(term);
	}
	
	// onInputChange(event){
		// console.log(event.target.value);
	// }
	
}


export default SearchBar; //In ES6 way 