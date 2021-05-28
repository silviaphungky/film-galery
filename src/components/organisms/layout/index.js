import React from 'react'
import  { NavBar } from 'components/molecules'
import './layout.css'

const Layout = ({ 
  children,
  activeSection,
  setActiveSection 
}) => (
  <>
    <NavBar 
      activeSection={ activeSection }
      setActiveSection={ setActiveSection }
    />
    <div className='layout__wrapper'>
      { children }
    </div>
  </>
)

export default Layout
