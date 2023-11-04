import React from 'react'
import './App.css'
import CustomRoutes from './routes/CustomRoutes'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div className="wrapper">
      <h1 className='heading' style={{textAlign: 'center', color: 'blueviolet', cursor: 'pointer'}}>
        <Link to='/'>Image Gallery</Link>
      </h1>
      </div>
      
      <CustomRoutes />
    </>
  )
}

export default App