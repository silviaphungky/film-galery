import React, { createContext, useContext, useEffect, useState } from 'react'

const FilterContext = createContext()

export const FilterProvider = ({ children }) => {

  const [yearFilter, setYearFilter] = useState('')
  const [keyword, setKeyword] = useState('')
  const [isDetail, setIsDetail] = useState(false)

  useEffect(() => {
    if(keyword) setYearFilter('')
  }, [keyword])

  return (
    <FilterContext.Provider value={{ 
      yearFilter    : yearFilter,
      keyword       : keyword,
      isDetail      : isDetail,
      setYearFilter : setYearFilter,
      setKeyword    : setKeyword,
      setIsDetail   : setIsDetail
    }}
    >
      { children }
    </FilterContext.Provider>
  )
}

export const useFilter = () => {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error('useFilter must be used within an FilterProvider')
  }
  return context
}
