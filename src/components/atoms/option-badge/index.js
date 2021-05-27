import React from 'react'
import { Badge } from 'reactstrap'
import './option-badge.css'
import PropTypes from 'prop-types'

const propTypes = {
  option: PropTypes.string
}

const defaultProps = {
  option: 'trending'
}

const OptionBadge = ({ 
  option, 
  activeSection,
  handleClickBadge 
}) => (
  <Badge 
    className='px-3 py-2 badge'
    style={{ opacity: option === activeSection ? 1 : 0.7 }}
    onClick={ handleClickBadge }
  >
    { option }
  </Badge>
)

OptionBadge.propTypes = propTypes
OptionBadge.defaultProps = defaultProps

export default OptionBadge
