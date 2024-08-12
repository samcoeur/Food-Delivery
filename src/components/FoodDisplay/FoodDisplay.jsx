import React, { useContext, useState } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../foodItem/FoodItem'


const FoodDisplay = ({category}) => {

    const {food_list}= useContext(StoreContext)
    let list =food_list
   if(category !== "All"){
     list = food_list.filter(item => item.category === category) ;
  }
  return (
     <div className='food-display' id='food-display'>
       <h2>Top dishes near you</h2>
       <div className="food-display-list">
       {list.map((item,index) => {
             return <FoodItem key={index} id={item._id} name={item.name} 
                      price={item.price} image={item.image} description={item.description} />
          })} 
       </div>
     </div> 
  )
}


export default FoodDisplay
