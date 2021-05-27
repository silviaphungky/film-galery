import { OptionBadge } from 'components/atoms'
import React from 'react'

const OPTIONS = [
  'Now Playing',
  'Top Rated',
  'Popular'
]

const BadgeList= ({ 
  activeSection,
  setActiveSection  
}) => (
  <div>
    {
      OPTIONS.map((option) => (
        <span key={ option } className='mx-2'>
          <OptionBadge 
            option={ option } 
            activeSection={ activeSection }
            handleClickBadge={ () => setActiveSection(option) }
          />
        </span>
      )) 
    }
  </div>
)

export default BadgeList
