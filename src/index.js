import _ from 'lodash';
import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YOUTUBE_API_KEY = 'youtube-api-key';


// We are going to create a component and this component is going to produce some html

// function component
// const App = function(){
/* const App = () => {
	return (
				<div className="container">
					<div className="row">					
						<div className="col-md-4 col-md-offset-4">
							<center><h1 className="text-success text-center">Hello World !</h1></center>
						</div>
						<SearchBar />
					</div>					
				</div>
			)
} */



/// As we need to keep tracks of the list of videos. SO we will make a class based component as it will track using state.
class App extends Component{
	
	constructor(props){
		super(props);
		
		this.state = { 
				videos:[],
				selectedVideo : null
			}; // an array as it will contain  a list of object
		
		this.videoSearch('php');
		
	}
	
	
	videoSearch(term){
		YTSearch({key: YOUTUBE_API_KEY, term: term}, (videos) => {
			// this.setState({videos: videos}); // In ES6 if key and value are same then
			this.setState({
					videos: videos,
					selectedVideo: videos[0]
				});
		});
	}
	
	render(){
		
		const videoSearchDelay = _.debounce((term) => {this.videoSearch(term)}, 300);
		
		// passing prop in <VideoList /> videos from parent app to child aap
	 return <div className="container">
						<div className="row">					
							<div className="col-md-4 col-md-offset-4">
								<center><h1 className="text-success text-center">Search Tube !</h1></center>
							</div>
							<SearchBar onSearchTermChange={videoSearchDelay}/>
						</div>
						<div className="row p-t-2">
							<VideoDetail video={this.state.selectedVideo}/>
							<VideoList 
								onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
								videos={this.state.videos}
							/>
						</div>
					</div>
		}
}


// We will tell react to take the abhove 'App' component generated HTML and serve it into the dom or on the page

ReactDOM.render(<App />, document.querySelector('.container'));