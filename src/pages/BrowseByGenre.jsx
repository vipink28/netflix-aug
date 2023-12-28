import React, { useEffect, useState } from 'react';
import axios from '../helper/axios';
import { requests } from '../helper/requests';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

function BrowseByGenre(props) {
    const { platform, genreid } = useParams();
    const [genreList, setGenreList] = useState(null);
    const [videosByGenre, setVideosByGenre] = useState(null);

    const fetchVideosByGenre = async (type, id) => {
        const response = await axios.get(requests.getVideosByGenre(type, id));
        setVideosByGenre(response.data.results);
    }

    //fetch genreList
    const fetchGenreList = async (type) => {
        const response = await axios.get(requests.getGenreList(type));
        setGenreList(response.data.genres);
    }

    useEffect(() => {
        if (platform) {
            fetchGenreList(platform);
        }
    }, [platform])



    useEffect(() => {
        if (platform && genreid) {
            fetchVideosByGenre(platform, genreid);
        }
    }, [platform, genreid])

    return (
        <div className='container-fluid py-5'>
            <div className='py-3'>
                <p>Filter Options</p>
                <select name="platform">
                    <option value="tv">Tv</option>
                    <option value="movie">Movies</option>
                </select>

                <select name="genres">
                    {
                        genreList?.map((genre) => (
                            <option value={genre?.id}>{genre?.name}</option>
                        ))
                    }
                </select>
            </div>
            <div className='row g-3'>
                {
                    videosByGenre?.map((video) => (
                        <div className='col-lg-3'>
                            <Card video={video} platform={platform} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default BrowseByGenre;