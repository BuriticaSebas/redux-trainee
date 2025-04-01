import React, { useState } from 'react'
import Container from '../components/Container'

import SearchBar from '../components/SearchBar'



const Home = () => {

  return (
    <>

    <div className='w-full min-h-screen bg-blue-100 flex justify-center items-center'>

    <div className="h-full bg-blue-500  flex flex-col p-4 my-10">
    <SearchBar></SearchBar>
    <Container></Container>
    </div>
        

    </div>   
    
    </>
  )
}

export default Home
