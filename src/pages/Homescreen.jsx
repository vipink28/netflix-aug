import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, netflixOriginalsSelector } from '../features/tv/tvSlice';
import Header from '../components/Header';

function Homescreen(props) {

    const dispatch = useDispatch();
    const netflixOriginals = useSelector(netflixOriginalsSelector);
    //const {results} = netflixOriginals.data; - either destructure the property or assign it to variable like the following.

    const nfresults = netflixOriginals.data?.results;
    console.log(nfresults);

    const randomIndex = Math.floor(Math.random() * nfresults?.length);


    useEffect(()=>{
        dispatch(fetchNetflixOriginals());
    }, []);
    
    return (
        <>
            {
                nfresults ?
            <Header video={nfresults[randomIndex]}/>: "no data"
            }
        </>
    );
}

export default Homescreen;