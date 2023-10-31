import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { platformSelector, videoDetailsSelector } from '../features/common/commonSlice';
import axios from '../helper/axios';
import { requests } from '../helper/requests';
import Card from './Card';
import VideoPlayer from './VideoPlayer';
function Popup(props) {
    const { data } = useSelector(videoDetailsSelector);
    const platform = useSelector(platformSelector);

    const [recommended, setRecommended] = useState(null);
    const [similar, setSimilar]=useState(null);

    const fetchRecommended = async(platform, id)=>{
      const response = await axios.get(requests.getRecommendedVideos(platform, id));
      setRecommended(response.data.results);
    }

    useEffect(()=>{
      if(data){
        fetchRecommended(platform, data.id)
      }
    }, [data])

    return (
        <div className="modal" tabIndex="-1" id='videopopup'>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">              
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <div className='position-relative mb-3'>
            {
            data?.videos.results.length > 0 ?
            <VideoPlayer videoList={data.videos.results}/> :            
            <img className='img-fluid' src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`} alt="" />
            
            }
            </div>
            


            <h3 className='title display-2'>{data?.name || data?.title || data?.original_title || data?.original_name}</h3>

          <div className='row gy-2'>
            {
              recommended?.map((rec, index)=>{                
                return(
                  index < 6 ?
                  <div className="col-md-4">
                    <Card video={rec} platform={platform}/>
                  </div>: ""
                )
              })
            }
            </div>

            


            </div>           
          </div>
        </div>
      </div>
    );
}

export default Popup;