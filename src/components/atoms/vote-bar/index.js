import React from 'react'
import './vote-bar.css'

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

export default VoteBar
