import React, { useCallback, useEffect, useRef, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import MovieApi from 'services/movie-api'
import { MovieList } from 'components/molecules'
import { useFilter } from 'context/filter-provider'

const FilteredMovie = ({  fetchMovieDetail }) => {

  const [filteredMovieList, setFilteredMovieList] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(2)
  const { yearFilter } = useFilter()

  const ref = useRef(yearFilter)

  useEffect(() => {
    if(ref.current !== yearFilter) {
      setPage(1)
    }
    MovieApi.getFilteredMovie({ 
      year: new Date(yearFilter).getFullYear(),
      page 
    })
      .then((response) => {
        const data = response.data.results
        if(page===1) {
          fetchMovieDetail({ id: data[0].id })
          setFilteredMovieList(data)
        }
        else {setFilteredMovieList([...filteredMovieList, ...data])}
        setTotalPage(response.data.total_pages)
      })
      .catch((error) => console.log(error))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, yearFilter])

  return(
    <InfiniteScroll
      dataLength={ filteredMovieList.length } //This is important field to render the next data
      next={ () => {
        setPage(page+1)
      } }
      hasMore={ page < totalPage }
      loader={ <h3>Loading...</h3> }
    >
      <MovieList 
        movieList={ filteredMovieList }
        fetchMovieDetail={ fetchMovieDetail }
      />
    </InfiniteScroll>
  )
}

export default FilteredMovie
