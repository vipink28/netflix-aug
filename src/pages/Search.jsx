import React, { useEffect, useState } from 'react';
import axios from '../helper/axios';
import { requests } from '../helper/requests';
import { useSelector } from 'react-redux';
import { selectQueryString } from '../features/common/commonSlice';
import Card from '../components/Card';

function Search(props) {
    const [videoResults, setVideoResults] = useState(null);
    const queryString = useSelector(selectQueryString);

    const fetchVideosBySearch = async (platform, query) => {
        const response = await axios.get(requests.getBySearch(platform, query));
        setVideoResults(response.data.results);
    }

    useEffect(() => {
        if (queryString) {
            fetchVideosBySearch("movie", queryString);
        }
    }, [queryString])

    return (
        <div className='container-fluid'>
            <div className="row g-3">
                {
                    videoResults?.map((video) => (
                        <div className='col-lg-3'>
                            <Card video={video} platform="movie" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Search;