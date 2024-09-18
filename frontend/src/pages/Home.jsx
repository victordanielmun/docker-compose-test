import React from 'react'
import Carousel from '../components/Carousel'
import Cards from '../components/Cards'

const Home = () => {
  return (
    <div className='min-h-[80vh] w-full bg-current flex flex-col justify-center items-center '>
      <Carousel />
      <Cards />
    </div>
  )
}

export default Home
