import React from 'react'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'
import { VoteBar } from 'components/atoms'
import { useFilter } from 'context/filter-provider'
import './preview-movie-detail.css'

const PreviewMovieDetail = ({ detail }) => {
  const { isDetail, setIsDetail } = useFilter()

  return(
    <Card className={ `movie-detail__wrapper shadow ${isDetail ? 'd-block' : 'd-none'}` }>
      <CardBody>
        <Button 
          color='danger'
          onClick={ () => setIsDetail(false) }
          className='float-right close'
        >
          x
        </Button>
        <Row>
          <Col 
            lg='4'
            sm='12'
          >
            <img 
              src={ `https://image.tmdb.org/t/p/w500/${detail.backdrop_path}` }
              width='100%'
            />
          </Col>
          <Col>
            <h4>
              { detail.original_title }
            </h4>
            <div>
              { detail.overview }
            </div>
            <div className='d-flex align-items-center'>
              <div>
            Vote Average:
              </div>
              <div className='flex-fill mx-3'>
                <VoteBar voteAvg={ detail.vote_average } />
              </div>
            </div>
            {
              detail.homepage
                ? (
                  <a target="_blank" rel="noopener" href={ detail.homepage }>
                    <Button color='info'>
                      <div>
                        View original
                      </div>
                    </Button>
                  </a>
                )
                : null
            }
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default PreviewMovieDetail
