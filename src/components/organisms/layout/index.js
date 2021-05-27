import React, { useState } from 'react'
import { BadgeList, NavBar, YearPicker } from 'components/molecules'
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
