import React from 'react'
import  { NavBar } from 'components/molecules'
import './layout.css'
import PropTypes from 'prop-types'

const propTypes = {
  activeSection    : PropTypes.string,
  setActiveSection : PropTypes.func
}

const defaultProps = {
  activeSection    : 'Now Playing',
  setActiveSection : () => []
}

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

Layout.propTypes = propTypes
Layout.defaultProps = defaultProps

export default Layout
