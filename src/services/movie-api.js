import axios from 'axios'

const baseUrl = 'https://api.themoviedb.org/3'
const API_KEY = 'd212dc1bfc2d8009f736f68f2e71938f'
const USER_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjEyZGMxYmZjMmQ4MDA5ZjczNmY2OGYyZTcxOTM4ZiIsInN1YiI6IjYwMzhhN2JhYjU0M DAyMDA2ZmY0NDVlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WcmCbjtu38vUUp6LblDFXR1glealfkkOi_f4AF nJrCo'

const MovieApi = {

  getNowPlaying: async (page) => {
    const url = `${baseUrl}/movie/now_playing?api_key=${API_KEY}`
    const response = await axios.get(url, { params: { page } })

    return response
  },

  getPopular: async (page) => {
    const url = `${baseUrl}/movie/popular?api_key=${API_KEY}`
    const response = await axios.get(url, { parans: { page } })

    return response
  },

  getTopRated: async (page) => {
    const url = `${baseUrl}/movie/top_rated?api_key=${API_KEY}`
    const response = await axios.get(url, { params: { page } })

    return response
  },

  getUpcoming: async () => {
    const url = `${baseUrl}/movie/upcoming?api_key=${API_KEY}`
    const response = await axios.get(url)

    return response
  },

  getSearchMovie: async ({ query, page }) => {
    const url = `${baseUrl}/search/movie?api_key=${API_KEY}`
    const response = await axios.get(url, 
      { 
        headers : { Authorization: `Bearer ${USER_TOKEN}` },
        params  : { query, page } 
      }
    )

    return response
  },

  getMovieDetail: async ({ id }) => {
    const url = `${baseUrl}/movie/${id}?api_key=${API_KEY}`
    const response = await axios.get(url)

    return response
  },

  getFilteredMovie: async ({ year, page }) => {
    const url = `${baseUrl}/discover/movie?api_key=${API_KEY}`
    const response = await axios.get(url, { params: { primary_release_year: year, page } })

    return response
  }

}

export default MovieApi
