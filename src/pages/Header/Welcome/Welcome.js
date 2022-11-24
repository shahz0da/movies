import React, { useEffect, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel';
import { BaseUrlImages, file_size } from '../../../utils/getData';
import getMovies from '../../../utils/getMovies';
import './welcome.css'


function Welcome() {
    // const [photo, setPhoto] = useState([])

    // function getData() {
    //     getMovies.getMoviesByCategory("popular").then(json => {
    //         console.log(json);
    //         setPhoto(json.data.results)
    //     })
    // }

    // useEffect(() => {
    //     getData()
    // }, [])
    return (
        <div className='container welcome'>
            {/* <Carousel>
                {
                    (photo.length > 0) && photo.map(item => {
                        return (
                            <Carousel.Item interval={1000}>
                                <img className="d-block w-100" src={BaseUrlImages + file_size + item.backdrop_path} alt="" />
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel> */}

            <div>
                <div className='forP'>
                    <p className='p'>Welcome.</p>
                    <p>Millions of movies, TV shows and people to discover. Explore now.</p>
                </div>
                <div className='search'>
                    <input className='input' type="text" placeholder='Search for a movie, tv show, person.....' />
                    <button className='buttons'>Search</button>
                </div>
            </div>

        </div>
    )
}

export default Welcome