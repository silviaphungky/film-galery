import React from 'react'
import { Badge } from 'reactstrap'
import './option-badge.css'
import PropTypes from 'prop-types'

const propTypes = {
  option           : PropTypes.string,
  activeSection    : PropTypes.string,
  handleClickBadge : PropTypes.func
}

const defaultProps = {
  option           : 'Now Playing',
  activeSection    : 'NowPlaying',
  handleClickBadge : () => {}
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
