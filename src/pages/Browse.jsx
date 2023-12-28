import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchNetflixOriginals, netflixOriginalsSelector } from '../features/tv/tvSlice';
import Header from '../components/Header';
import Row from '../components/Row';
import axios from '../helper/axios';
import { requests } from '../helper/requests';


function Browse(props) {
    const [genreList, setGenreList] = useState(null);
    const { platform } = useParams();

    const dispatch = useDispatch();
    const netflixOriginals = useSelector(netflixOriginalsSelector);
    //const {results} = netflixOriginals.data; - either destructure the property or assign it to variable like the following.
    const nfresults = netflixOriginals.data?.results;




    const randomIndex = Math.floor(Math.random() * nfresults?.length);
    useEffect(() => {
        dispatch(fetchNetflixOriginals());
    }, []);

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



    return (
        <div className='py-5'>
            {
                nfresults ?
                    <Header item={nfresults[randomIndex]} platform={platform} /> : "no data"
            }

            <div className='container-fluid'>
                {
                    genreList?.map((genre, index) => (
                        index < 6 ?
                            <Row key={genre.id} genre={genre} title={genre?.name} selector={() => { }} platform={platform} /> : ""
                    ))

                }
            </div>
        </div>
    );
}

export default Browse;