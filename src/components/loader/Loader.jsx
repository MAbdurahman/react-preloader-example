import React from 'react';
import LoadingGif from '../../img/loader/loading.gif';

function ShowDetail() {
	return (
		<div className='loader center'>
			<img src={LoadingGif} alt="Loading Gif"/>
		</div>
	);
}

export default ShowDetail;
