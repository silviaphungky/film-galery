import React, { useEffect, useState } from 'react'
import { Input } from 'reactstrap'
import { useHistory, useLocation } from 'react-router-dom'
import './search-input.css'
import { useFilter } from 'context/filter-provider'

const SearchInput = () => {
  const [keyword, setKeyword] = useState('')
  const history = useHistory()
  const location = useLocation()
  const { setYearFilter } = useFilter()

  useEffect(() => {
    const searchKeyword = location.search.split('=').pop()
    setKeyword(searchKeyword)
  }, [location.search])

  return(
    <form onSubmit={ (e) => {
      e.preventDefault()
      if(e.target[0].value) setYearFilter('')
      history.push(`?search=${keyword}` )
    } }
    >
      <Input 
        className='search__input'
        type='search'
        placeholder='search keyword'
        value={ keyword }
        onChange={ (e) => setKeyword(e.target.value) }
      />
    </form>
  )
}

export default SearchInput
