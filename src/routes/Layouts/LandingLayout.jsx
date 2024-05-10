import React from 'react'
import { Outlet } from 'react-router-dom'

const LandingLayout = () => {
  return (
    <div>
        <header>navbar</header>
        <Outlet/>
        <footer>Footer</footer>
    </div>
  )
}

export default LandingLayout