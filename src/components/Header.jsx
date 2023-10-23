import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeaderVideo, headerVideoSelector } from '../features/common/commonSlice';

function Header(props) {
    const {item} = props;
    const dispatch = useDispatch();
    const details = useSelector(headerVideoSelector);
    const video = details.data;
    useEffect(()=>{
        if(item){
            dispatch(fetchHeaderVideo({platform:"tv", id:item.id}))
        }
    }, [item])    

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