class UserMovieDB {
  constructor() {
    this.url = 'http://localhost:8000/movieList/list'
  }

  async getMovies() {
    const response = await fetch(this.url)
    const responseData = await response.json()
    return responseData
  }

  async postMovie(movieData) {
    const csrftoken = Cookies.get('csrftoken')
    const rawResponse = await fetch(this.url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken,
      },
      body: JSON.stringify(this._parseData(movieData))
    })
    movieData.status = rawResponse.status
    return movieData
  }

  async deleteMovie(movieId) {
    var csrftoken = Cookies.get('csrftoken')
    const deleteUrl = this.url + "/" + movieId
    const response = await fetch(deleteUrl, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        'X-CSRFToken': csrftoken
      }
    })
    const resData = await 'Película Eliminada!'
    return resData
  }

  async watchedMovie(movieId) {
    var csrftoken = Cookies.get('csrftoken')
    const watchedUrl = this.url + "/watched/" + movieId
    const response = await fetch(watchedUrl, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        'X-CSRFToken': csrftoken
      }
    })
    return response;
  }

  _parseData(movieData) {
    return {
      imdbID: movieData.imdbID,
      Title: movieData.Title,
      Poster: movieData.Poster,
      Year: movieData.Year
    }
  }
}

export const userMovieDB = new UserMovieDB()
