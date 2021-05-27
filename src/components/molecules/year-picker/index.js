import React from 'react'
import DatePicker from 'react-datepicker'
import { useFilter } from 'context/filter-provider'
import './year-picker.css'
import { useHistory } from 'react-router'

const YearPicker = () => {
  const twoYearFromNow = new Date()
  twoYearFromNow.setFullYear(twoYearFromNow.getFullYear() + 2)
  const { yearFilter, setYearFilter } = useFilter()
  const history = useHistory()
  
  return(
    <div className='year-picker__wrapper'>
      <DatePicker
        selected={ yearFilter }
        onChange={ (date) => {
          setYearFilter(date)
          history.replace('/')
        } }
        showYearPicker
        dateFormat="yyyy"
        maxDate={ twoYearFromNow }
        placeholderText="release year"
      />
    </div>
  )
}

export default YearPicker
