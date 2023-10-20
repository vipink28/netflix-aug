import React from 'react';

function Card(props) {
    const { video } = props;
    return (
        <div className='card text-white'>
            <img className='card-img-top' src={`https://image.tmdb.org/t/p/original${video?.backdrop_path}`} alt="" />
            <div className="card-body">
                <h5 className='card-title'>{video?.name || video?.title || video?.original_title || video?.original_name}</h5>
            </div>
        </div>
    );
}

export default Card;