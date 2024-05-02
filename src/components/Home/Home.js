import React from 'react'
import ImageSlide from './ImageSlide'
import IntroCard from './introCard'
import Details from './Details'
import Mainhome from "./mainpuja"

const Home = () => {
  return (
    <div className='holehome'>
      <ImageSlide/>
      <IntroCard/>
      <Mainhome/>
      <Details/>
    </div>

  )
}

export default Home
