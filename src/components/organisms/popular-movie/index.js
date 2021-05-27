import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import MovieApi from 'services/movie-api'
import { MovieList } from 'components/molecules'
import { Loader } from 'components/atoms'

const PopularMovie = ({  fetchMovieDetail }) => {

  const [popularList, setPopularList] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(2)

  useEffect(() => {
    MovieApi.getPopular(page)
      .then((response) => {
        const data = response.data.results
        setPopularList([...popularList, ...data])
        setTotalPage(response.data.total_pages)
      })
      .catch((error) => console.log(error))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return(
    <InfiniteScroll
      dataLength={ popularList.length } //This is important field to render the next data
      next={ () => {
        setPage(page+1)
      } }
      hasMore={ page < totalPage }
      loader={ <Loader /> }
    >
      <MovieList 
        movieList={ popularList }
        fetchMovieDetail={ fetchMovieDetail }
      />
    </InfiniteScroll>
  )
}

export default PopularMovie
