import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularTv, popularTvSelector } from '../features/tv/tvSlice';
import Card from './Card';

function Row(props) {
    const {title, action, selector, platform} = props;
    const collection = useSelector(selector);
    const collectionResult = collection.data?.results;
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(action());
    }, [])

    return (
      <div className='py-3'>
        <h3 className='text-white'>{title}</h3>
        <Swiper
        spaceBetween={20}
        slidesPerView={5}
        modules={[Navigation]}
        navigation
      >
        {
          collectionResult?.map((item)=>{
            return(
              <SwiperSlide key={item.id}>
              <Card video={item} platform={platform}/>
            </SwiperSlide>
            )
          })
        }     
      </Swiper>
      </div>
    );
}

export default Row;