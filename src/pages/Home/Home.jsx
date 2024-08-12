import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenue/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Download from '../../components/Download/Download'

const Home = () => {

  const [category,setCategory] = useState('All')
  return (
    <div>
      <Header/>  
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category ={category} id='food-display'/>
      <Download/>
    </div>
  )
}

export default Home;

