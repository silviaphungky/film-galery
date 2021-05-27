import React, { createContext, useContext, useEffect, useState } from 'react'

const FilterContext = createContext()

export const FilterProvider = ({ children }) => {

  const [yearFilter, setYearFilter] = useState('')
  const [isDetail, setIsDetail] = useState(false)

  return (
    <FilterContext.Provider value={{ 
      yearFilter    : yearFilter,
      isDetail      : isDetail,
      setYearFilter : setYearFilter,
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
