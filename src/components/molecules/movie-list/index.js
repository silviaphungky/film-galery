import { useFilter } from 'context/filter-provider'
import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'
import './movie-list.css'

const MovieList = ({ movieList, fetchMovieDetail }) =>{
  const { setIsDetail } = useFilter()
  const [selectedId, setSelectedId] = useState(0)
  return(
    <Row noGutters className='mt-3'>
      {
        movieList.map((item) => (
          <Col
            lg='2'
            md='4' 
            sm='4'
            xs='6'
            key={ item.title }
            onClick={ () => {
              setIsDetail(true)
              fetchMovieDetail({ id: item.id })
              setSelectedId(item.id)
            } }
          >
            <img 
              src={ `https://image.tmdb.org/t/p/w500/${item.poster_path}` }
              width={ selectedId === item.id ? '100%' : '70%' }
              height='65%'
              className='d-block m-auto movie__img'
            />
            <div className='title font-weight-bold mt-2 text-center'>
              { item.title }
            </div>
          </Col>
        ))
      }
    </Row> 
  )
}

export default MovieList