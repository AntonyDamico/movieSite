class OpenMovieDB {
  constructor () {
    this.apiKey = 'thewdb'
    this.baseUrl = 'http://www.omdbapi.com/'
    this.currentSearch = ''
  }

  /**
   * Busca la película en la api publica de omdb
   * @param {String} movieName - Nombre de la película que se va a buscar
   * @returns {Promise} JSON de los resultados de la búsqueda
   */
  searchMovie (movieName) {
    const params = {
      // se cambian los espacions en blanco por '+'
      s: movieName.split(' ').join('+')
    }

    // Guarda la promesa en una variable
    this.currentSearch = this._fetchFromApi(params)

    // Devuelve una promesa
    return this.currentSearch
  }

  /**
   * Obtiene una película específica por el id
   * @param {String} movieId - id de la película que se desea
   * @returns {Promise} JSON de los resultados de la busqueda
   */
  getMovieById (movieId) {
    const params = {
      // se cambian los espacions en blanco por '+'
      i: movieId
    }

    // this._fetchFromApi(params)
    //   .then(params => callback(params));

    // Devuelve una promesa
    return this._fetchFromApi(params)
  }

  /**
   * Realiza el fetch en la API
   * @param {Object} params - parametros que se van a usar en la búsqueda
   * @returns {Promise} JSON de la respuesta de la API
   */
  async _fetchFromApi (params) {
    const url = this._buildQuery(params)
    const response = await fetch(url)
    const responseData = await response.json()
    return responseData
  }

  /**
   * Construye el formato correcto para la API
   * @param {Object} params - Objeto para aplicar el formato
   * @returns {String} el objeto convertido en cadena con el formato correcto
   */
  _buildQuery (params) {
    Object.assign(params, {
      apikey: this.apiKey
    })

    const query = this._joinParams(params)
    return `${this.baseUrl}?${query}`
  }

  /**
   * Une las claves con su valor usando '=' y con otras claves usando '&'
   * @param {Object} params - Objeto para unir
   * @returns {String} Cadena con claves y valores unidos
   */
  _joinParams (params) {
    return Object.keys(params)
      .map(key => key + '=' + params[key])
      .join('&')
  }
}

export const openMovieDB = new OpenMovieDB()
