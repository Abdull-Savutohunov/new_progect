import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Colect from './../../colect';


const LayoutRoutes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Colect />} />
      </Routes>
    </React.Fragment>
  )
}

export default LayoutRoutes