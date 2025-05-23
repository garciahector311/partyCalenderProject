import React from 'react'
import { Outlet } from 'react-router-dom'
import Navebar from '../components/Navebar'


function MainLayout() {
  return (
    <>
        <Navebar />
        <Outlet />
    </>
  )
}

export default MainLayout
