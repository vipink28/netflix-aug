import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeaderVideo, headerVideoSelector } from '../features/common/commonSlice';
import Ratings from './Ratings';
import Genre from './Genre';
import VideoPlayer from './VideoPlayer';
import { truncateText } from '../helper';

function Header(props) {
    const {item} = props;
    const [showTrailer, setShowTrailer] = useState(false);
    const dispatch = useDispatch();
    const details = useSelector(headerVideoSelector);
    const video = details.data;
    useEffect(()=>{
        if(item){
            dispatch(fetchHeaderVideo({platform:"tv", id:item.id}))
        }
    }, [item])

    const viewTrailer=()=>{
        setShowTrailer(true);
    }

    return (
        <div className='position-relative vh-100'>
            {
                showTrailer ? <VideoPlayer videoList={video?.videos.results} />:
            <>
            <img className='header-img' src={`https://image.tmdb.org/t/p/original${video?.backdrop_path}`} alt="" />
            <div className='caption'>
                <h1 className='title display-2'>{truncateText(video?.name || video?.title || video?.original_title || video?.original_name, 40)}</h1>
                <h3 className='tagline display-6 text-warning'>{video?.tagline}</h3>
                <p>{truncateText(video?.overview, 180)}</p>
                <div className='d-flex align-items-center'>
                    {
                        video?.genres.map((genre)=>{
                            return <Genre key={genre.id} genreItem = {genre}/>
                        })
                    }
                </div>
                <Ratings voteCount={video?.vote_count} voteAverage={video?.vote_average}/>
                <div className='d-flex align-items-center'>
                    <button className='btn btn-info me-2' onClick={viewTrailer}>Play</button>
                    <button className='btn btn-warning'>More info</button>
                </div>
            </div>
            <div className="header-vignette"></div>
            </>
            }
            <div className="header-bottom-vignette"></div>
        </div>
    );
}

export default Header;