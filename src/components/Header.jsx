import React from 'react';

function Header(props) {
    const {video} = props;
    console.log(video);

    return (
        <div className='position-relative vh-100'>
            <img className='header-img' src={`https://image.tmdb.org/t/p/original${video?.backdrop_path}`} alt="" />
            <p>{video?.overview}</p>
        </div>
    );
}

export default Header;