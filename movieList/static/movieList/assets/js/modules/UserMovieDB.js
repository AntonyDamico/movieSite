class UserMovieDB {
  constructor() {
    this.url = 'http://localhost:8000/movies/'
  }

  async getMovies() {
    const response = await fetch(this.url)
    const responseData = await response.json()
    console.log(responseData)
  }

  async postMovie(movieData) {
    console.log(movieData)
    console.log(this._parseData(movieData))
    const rawResponse = await fetch(this.url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this._parseData(movieData))
    })
    console.log(rawResponse)
    return movieData
  }

  async deleteMovie(movieData) {
    const response = await fetch(this.url, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      }
    })

    console.log(response)
    const resData = await 'Película Eliminada!'
    return resData
  }

  _parseData(movieData) {
    return {
      imdb_id: movieData.imdbID,
      title: movieData.Title,
      poster: movieData.Poster,
      year: movieData.Year
    }
  }
}

export const userMovieDB = new UserMovieDB()
