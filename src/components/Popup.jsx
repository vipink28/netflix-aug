import React from 'react';
import { useSelector } from 'react-redux';
import { videoDetailsSelector } from '../features/common/commonSlice';

function Popup(props) {
    const { data } = useSelector(videoDetailsSelector);
    return (
        <div className="modal" tabIndex="-1" id='videopopup'>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">              
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <h3 className='title display-2'>{data?.name || data?.title || data?.original_title || data?.original_name}</h3>
            </div>           
          </div>
        </div>
      </div>
    );
}

export default Popup;