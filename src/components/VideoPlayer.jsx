import React from 'react';

function VideoPlayer(props) {
    const {videoList}=props;
    const trailer = videoList.find((item)=>{
        return item.type === "Trailer"
    })
    return (
        <div className="ratio ratio-16x9 youtube-player">
            <iframe src={`https://www.youtube.com/embed/${trailer?.key}?rel=0&autoplay=1&mute=1`} title="YouTube video" allowfullscreen></iframe>
        </div>
    );
}

export default VideoPlayer;