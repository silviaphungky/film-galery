/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, Suspense, lazy } from 'react'
import MovieApi from '../../services/movie-api'
import {
  Layout, 
  NowPlayingMovie,
  SearchMovie,
  FilteredMovie,
  TopRatedMovie,
  PopularMovie
} from 'components/organisms'
import { useLocation } from 'react-router-dom'
import { useFilter } from 'context/filter-provider'

const PreviewMovieDetail = lazy(() => import('components/organisms/preview-movie-detail'))

const HomePage = () => {

  const [activeSection, setActiveSection] = useState('Now Playing')
  const [movieDetail, setMovieDetail] = useState({})
  const [keyword, setKeyword] = useState('')
  const location = useLocation()
  const { yearFilter } = useFilter()



  useEffect(() => {
    const searchKeyword = location.search.split('=').pop()
    setKeyword(searchKeyword)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search])


  const fetchMovieDetail = ({ id }) => {
    MovieApi.getMovieDetail({ id })
      .then((response) => {
        const data = response.data
        setMovieDetail(data)
      })
      .catch((error) => console.log(error))
  }

  const displayMovieList = () => {
    if(keyword) return <SearchMovie fetchMovieDetail={ fetchMovieDetail } />
    else if (yearFilter) return <FilteredMovie fetchMovieDetail={ fetchMovieDetail } />
    else {
      if(activeSection === 'Now Playing') return <NowPlayingMovie fetchMovieDetail={ fetchMovieDetail }/>
      else if(activeSection === 'Top Rated') return <TopRatedMovie fetchMovieDetail={ fetchMovieDetail }/>
      else return <PopularMovie fetchMovieDetail={ fetchMovieDetail }/>
    }
  }

  return(
    <>
      <Layout 
        activeSection={ activeSection } 
        setActiveSection={ setActiveSection }
      >
        <Suspense fallback={ <div /> }>
          <PreviewMovieDetail detail={ movieDetail } />
        </Suspense>
        { displayMovieList() }
      </Layout>
    </>
  )
}

export default HomePage
