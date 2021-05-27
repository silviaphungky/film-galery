import SearchInput from 'components/atoms/search-input'
import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
} from 'reactstrap'
import { BadgeList, YearPicker } from 'components/molecules'
import './navbar.css'

const NavBar = ({ 
  activeSection,
  setActiveSection 
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return(
    <Navbar 
      light
      expand="md"
      className='position-sticky w-100 navbar'
    >
      <NavbarBrand 
        href="https://github.com/silviaphungky"
        className='d-flex navbar-brand align-items-center'
      >
        <img 
          src='/github.png' 
          width='30%' 
        />
        <div className='ml-3'>
          Github
        </div>
      </NavbarBrand>
      <NavbarToggler onClick={ toggle } />
      <Collapse isOpen={ isOpen } navbar>
        <Nav className="w-100" navbar>
          <div className='menu__wrapper d-flex w-100'>
            <div className='flex-fill'>
              <BadgeList 
                activeSection={ activeSection }
                setActiveSection={ setActiveSection }
              />
            </div>
            <div className='flex-end'>
              <YearPicker />
            </div>
            <div className='flex-end'>
              <SearchInput />
            </div>
          </div>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default NavBar
