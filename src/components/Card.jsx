import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchVideoDetails } from '../features/common/commonSlice';

function Card(props) {
    const { video, platform } = props;
    const dispatch = useDispatch();
    const showDetails = ()=>{
        dispatch(fetchVideoDetails({platform:platform, id:video.id}))
    }
    return (
        <div className='card text-white' data-bs-toggle="modal" data-bs-target="#videopopup" onClick={showDetails}>
            <img className='card-img-top' src={`https://image.tmdb.org/t/p/original${video?.backdrop_path}`} alt="" />
            <div className="card-body">
                <h5 className='card-title'>{video?.name || video?.title || video?.original_title || video?.original_name}</h5>
            </div>
        </div>
    );
}

export default Card;