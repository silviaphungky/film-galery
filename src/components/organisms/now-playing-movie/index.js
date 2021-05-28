import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import MovieApi from 'services/movie-api'
import { MovieList } from 'components/molecules'
import { Loader } from 'components/atoms'
import PropTypes from 'prop-types'

const propTypes = {
  fetchMovieDetail: PropTypes.func
}

const defaultProps = {
  fetchMovieDetail: () => {}
}

const NowPlayingMovie = ({  fetchMovieDetail }) => {

  const [nowPlayingList, setNowPlayingList] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(2)

  useEffect(() => {
    MovieApi.getNowPlaying(page)
      .then((response) => {
        const data = response.data.results
        setNowPlayingList([...nowPlayingList, ...data])
        setTotalPage(response.data.total_pages)
      })
      .catch((error) => console.log(error))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return(
    <InfiniteScroll
      dataLength={ nowPlayingList.length } //This is important field to render the next data
      next={ () => {
        setPage(page+1)
      } }
      hasMore={ page < totalPage }
      loader={ <Loader /> }
    >
      <MovieList 
        movieList={ nowPlayingList }
        fetchMovieDetail={ fetchMovieDetail }
      />
    </InfiniteScroll>
  )
}

NowPlayingMovie.propTypes = propTypes
NowPlayingMovie.defaultProps = defaultProps

export default NowPlayingMovie
