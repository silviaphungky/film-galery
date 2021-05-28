import React from 'react'
import './vote-bar.css'
import PropTypes from 'prop-types'

const propTypes = {
  voteAvg: PropTypes.number
}

const defaultProps = {
  voteAvg: 0
}

const VoteBar = ({ voteAvg }) => (
  <div className='d-flex mt-2 mb-3'>
    <div
      className='vote-bar--color'
      style={{ flex: `0 0 ${voteAvg *10}%` }}
    />
    <div
      className='vote-bar--uncolor'
      style={{ flex: `0 0 ${(10-voteAvg) *10}%` }}
    />
  </div>
)

VoteBar.propTypes = propTypes
VoteBar.defaultProps = defaultProps

export default VoteBar
