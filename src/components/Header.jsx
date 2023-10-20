import React from 'react';

function Header(props) {
    const {video} = props;
    console.log(video);

    return (
        <div className='position-relative vh-100'>
            <img className='header-img' src={`https://image.tmdb.org/t/p/original${video?.backdrop_path}`} alt="" />
            <div className='caption'>
                <h1>{video?.name || video?.title || video?.original_title || video?.original_name}</h1>
                <p>{video?.overview}</p>
            </div>
            <div className="header-vignette"></div>
            <div className="header-bottom-vignette"></div>
        </div>
    );
}

export default Header;