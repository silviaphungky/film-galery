import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import MovieApi from 'services/movie-api'
import { MovieList } from 'components/molecules'
import { useLocation } from 'react-router-dom'
import { Empty, Loader } from 'components/atoms'
import PropTypes from 'prop-types'
import { Spinner } from 'reactstrap'

const propTypes = {
  fetchMovieDetail: PropTypes.func
}

const defaultProps = {
  fetchMovieDetail: () => {}
}

const SearchMovie = ({ fetchMovieDetail }) => {
  const [searchResultList, setSearchResultList] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(2)
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const searchKeyword = location.search.split('=').pop()
    if(searchKeyword) {
      setPage(1)
      setSearchResultList([])
      MovieApi.getSearchMovie({ query: searchKeyword, page: 1 })
        .then((response) => {
          const data = response.data.results
          setSearchResultList(data)
          setTotalPage(response.data.total_pages)
          setIsLoading(false)
        })
        .catch((error) => console.log(error))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search])

  useEffect(() => {
    const searchKeyword = location.search.split('=').pop()
    if(searchKeyword) {
      MovieApi.getSearchMovie({ query: searchKeyword, page: page })
        .then((response) => {
          const data = response.data.results
          setSearchResultList([...searchResultList, ...data])
          setTotalPage(response.data.total_pages)
        })
        .catch((error) => console.log(error))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return(
    isLoading
      ? <Spinner color='info'/>
      : (
        searchResultList.length === 0 
          ? <Empty />
          : (
            <InfiniteScroll
              dataLength={ searchResultList.length } //This is important field to render the next data
              next={ () => {
                setPage(page+1)
              } }
              hasMore={ page < totalPage }
              loader={ <Loader /> }
            >
              <MovieList 
                movieList={ searchResultList }
                fetchMovieDetail={ fetchMovieDetail }
              />
            </InfiniteScroll>
          )
      )
  )
}

SearchMovie.propTypes = propTypes
SearchMovie.defaultProps = defaultProps

export default SearchMovie
