import React, { useEffect, useState } from 'react'
import { BaseUrlImages, file_size } from '../../utils/getData'
import getMovies from '../../utils/getMovies'
// import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar'
import Welcome from '../Header/Welcome/Welcome'
import WhatsPopular from '../WhatsPopular/WhatsPopular'
import './home.css'

function Home() {
  const [movies, setMovies] = useState([])

  function getData() {
    getMovies.getMoviesByCategory("popular").then(json => {
      setMovies(json.data.results)
    })
  }
  
  useEffect(() => {
    getData()

  }, [])
  
  return (
    <div>
        <Navbar/>
        <Welcome/>
        <WhatsPopular/>
        {
          (movies.length > 0) ? movies.map((item, index) => {
            return (
              <div key={index}>
                <h4>{item.title}</h4>
                <img src={BaseUrlImages + file_size + item.poster_path} alt={item.title} />
              </div>
            )
          }) : (
            <div>
              <h2>Loading...</h2>
            </div>
          )
        }
        {/* <Footer/> */}
    </div>
  )
}

export default Home