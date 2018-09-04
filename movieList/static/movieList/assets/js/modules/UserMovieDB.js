class UserMovieDB {
  constructor() {
    this.url = 'http://localhost:8000/movieList/list'
  }

  async getMovies() {
    console.log(this.url)
    const response = await fetch(this.url)
    const responseData = await response.json()
    return responseData
  }

  async postMovie(movieData) {
    console.log(this._parseData(movieData))
    var csrftoken = Cookies.get('csrftoken')
    console.log(csrftoken)
    const rawResponse = await fetch(this.url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken,
      },
      body: JSON.stringify(this._parseData(movieData))
    })
    console.log(rawResponse)
    return movieData
  }

  async deleteMovie(movieId) {
    var csrftoken = Cookies.get('csrftoken')
    const deleteUrl = this.url + "/" + movieId
    console.log(deleteUrl)
    const response = await fetch(deleteUrl, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        'X-CSRFToken': csrftoken
      }
    })
    console.log(response)
    const resData = await 'Película Eliminada!'
    return resData
  }

  _parseData(movieData) {
    return {
      Imdb_id: movieData.imdbID,
      Title: movieData.Title,
      Poster: movieData.Poster,
      Year: movieData.Year
    }
  }
}

export const userMovieDB = new UserMovieDB()
