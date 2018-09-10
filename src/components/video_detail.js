import React from 'react';

const VideoDetail = ({video}) => {
	// console.log(video);
	if(!video){
		return (
			<div className='col-md-8'>
				<div className='video-detail'>
					Loading...
				</div>
			</div>
		)
	}
	
	if(typeof video != 'undefined'){
		const videoId = video.id.videoId;
		const url = `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&showinfo=1&autohide=1`; //ES6 way
		let apiPubDate = new Date(video.snippet.publishedAt);
		let pubDate = apiPubDate.getDate() + '-' + (apiPubDate.getMonth() + 1) + '-' + apiPubDate.getFullYear();
		
		
		return (
			<div className='col-md-8'>
				<div className='video-detail'>
					<div className='embed-responsive embed-responsive-16by9'>
						<iframe className='embed-responsive-item' src={url} allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"></iframe>
					</div>
					<div className='details'>
						<h3 className='p-b-1'>{video.snippet.title}</h3>
						<i>Publised on: {pubDate}</i>
						<div>{video.snippet.description}</div>
					</div>
				</div>
			</div>
		)
	}
}

export default VideoDetail;