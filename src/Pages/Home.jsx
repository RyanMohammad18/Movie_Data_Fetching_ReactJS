
import React, { useContext } from 'react'
//import { AppContext } from '.Context.jsx'
//import { useGlobalContext } from './Pages/Context.jsx'
import { useGlobalContext } from './Context';
import { AppContext } from './Context';
import Search from './Search';
import Movies from './Movies';


const Home = () => {
   
  return (
    <div>
      <Search/>
      <Movies/>
      
    </div>
    
  )
}

export default Home