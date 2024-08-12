import React from 'react'
import './Download.css'
import {assets} from '../../assets/assets'

const Download = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For better experience Download <br/> Tomato App</p>
      <div className="app-download-platforms">
        <img src={assets.app_store} alt="" />
        <img src={assets.play_store} alt="" />
      </div>
    </div>
  )
}

export default Download;
