import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import MovieApi from 'services/movie-api'
import { MovieList } from 'components/molecules'
import { useLocation } from 'react-router-dom'

const SearchMovie = ({ fetchMovieDetail }) => {
  const [searchResultList, setSearchResultList] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(2)
  const [keyword, setKeyword] = useState('')
  const location = useLocation()

  useEffect(() => {
    const searchKeyword = location.search.split('=').pop()
    setKeyword(searchKeyword)
    if(searchKeyword) {
      setPage(1)
      setSearchResultList([])
      MovieApi.getSearchMovie({ query: searchKeyword, page: 1 })
        .then((response) => {
          const data = response.data.results
          if(page===1) fetchMovieDetail({ id: data[0].id })
          setSearchResultList(data)
          setTotalPage(response.data.total_pages)
        })
        .catch((error) => console.log(error))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search])

  useEffect(() => {
    const searchKeyword = location.search.split('=').pop()
    setKeyword(searchKeyword)
    if(searchKeyword) {
      MovieApi.getSearchMovie({ query: searchKeyword, page: page })
        .then((response) => {
          const data = response.data.results
          if(page===1) fetchMovieDetail({ id: data[0].id })
          setSearchResultList([...searchResultList, ...data])
          setTotalPage(response.data.total_pages)
        })
        .catch((error) => console.log(error))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return(
    <InfiniteScroll
      dataLength={ searchResultList.length } //This is important field to render the next data
      next={ () => {
        setPage(page+1)
      } }
      hasMore={ page < totalPage }
      loader={ <h3>Loading...</h3> }
    >
      <MovieList 
        movieList={ searchResultList }
        fetchMovieDetail={ fetchMovieDetail }
      />
    </InfiniteScroll>
  )
}

export default SearchMovie
