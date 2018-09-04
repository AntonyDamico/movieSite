class UI {
  constructor () {
    this.searchInput = document.getElementById('search-movie-input')
    this.searchBtn = document.getElementById('search-movie-btn')
    this.movieGrid = document.getElementById('movie-grid')
    this.container = document.querySelector('.container')
    this.alertContainer = document.querySelector('.alert')
    this.modal = document.querySelector('.modal')
    this.modalContent = document.querySelector('.modal__content')
  }

  /**
   * Muestra los resultados de la busqueda de peliculas en un modal
   * @param {JSON} movies - json of the movies to show
   */
  showSearch (movies) {
    // variable para guardar el HTML final
    let output = ''
    if (movies) {
      output = `
        <h3 class='modal__title'>
          Busqueda
        <span class='modal__close'>&times</span>  
        </h3>
        `
      movies.forEach(movie => {
        // Comprobando si es una película y no una serie o un juego
        if (movie.Type === 'movie') {
          output += this._createMovie(movie, 'search')
        }
      })
      // Muestra el HTML creado en un modal
      this.openModal(output)
    } else {
      // Si no hay películas muestra una alerta
      this.showAlert('Película no encontrada', 'danger')
    }
  }

  /**
   * Muestra una alerta bajo la barra de búsqueda
   * @param {String} msg - mensaje para mostrar en la alerta
   * @param {String} className - clase para determinar el tipo de alerta
   */
  showAlert (msg, className) {
    // Comprobando si no hay otra alerta activa
    if (this.alertContainer.firstChild) {
      this._closeAlert()
    }
    this.alertContainer.className += ` alert__${className} alert--active`
    this.msgTextNode = document.createTextNode(msg)
    this.alertContainer.appendChild(this.msgTextNode)
    // Esconde la alerta
    setTimeout(() => this._closeAlert(), 2000)
  }

  _closeAlert () {
    this.msgTextNode.remove()
    this.alertContainer.className = 'alert'
  }

  /**
   * Abre el modal en medio de la página
   * @param {String} content - Contenido para poner dentro del modal
   */
  openModal (content) {
    this.modal.style.transform = 'scale(1)'
    this.modalContent.innerHTML = content
    // El modal se cierra al hacer click fuera
    window.addEventListener('click', e => {
      if (e.target === this.modal || e.target.className === 'modal__close') {
        this._closeModal()
      }
    })
  }

  /**
   * Cierra el modal si está abierto
   */
  _closeModal () {
    this.modal.style.transform = 'scale(0)'
  }

  /**
   * Agrega la película a la lista principal
   * @param {JSON} movie - película que se va a agregar
   */
  addMovie (movie) {
    const dummyDiv = document.createElement('div')
    dummyDiv.innerHTML = this._createMovie(movie, 'list').trim()
    const newMovie = dummyDiv.firstChild
    this.movieGrid.appendChild(newMovie)
    this._closeModal()
    this.showAlert('Película Agregada', 'success')
  }

  /**
   * Consigue el ID del elemento pasado en una lista proporcionada por la promesa
   * @param {HTMLDivElement} element - Elemento del que se quiere obtener el ID
   * @param {Promise} promiseMovieSearch - Promesa que se obtuvo al realizar la búsqueda
   * @returns {String} ID del elemento
   */
  getMovieId (element, promiseMovieSearch) {
    const movieId = promiseMovieSearch.then(jsonMovieList => {
      const movieTitle = element.parentElement.querySelector('#movie-title')
        .textContent
      const movieListTitle = jsonMovieList.Search.map(movie => movie.Title)
      const index = movieListTitle.indexOf(movieTitle)
      const id = jsonMovieList.Search[index].imdbID
      return id
    })
    return movieId
  }

  /**
   * Quita la película especificada
   * @param {HTMLDivElement} movie - Div que contiene a la película
   * @param {String} msg - Mensaje para el confirm al preguntar si quitar
   * @returns {Boolean} - true si la película fue removida, false sino lo fue
   */
  removeMovie (movie, msg) {
    const choice = confirm(msg)
    if (choice) {
      movie.remove()
      return true
    }
    return false
  }

  /**
   * Crea el HTML de un elemento película
   * @param {JSON} movie - JSON de la película para crear
   * @param {String} icon - Nombre del tipo de ícono que se desea
   * @returns {String} HTML de la nueva película
   */
  _createMovie (movie, icon) {
    let content = `
      <li class="movie card">
        <div class="movie--image-class">
          <img src="${movie.Poster}">
        </div>`

    content += this._resolveIcon(icon)

    content += `
        <div class="movie__info">
          <h3 id="movie-title">${movie.Title}</h3>
          <p>${movie.Year}</p>
        </div>
      </li>
    `

    return content
  }

  /**
   * retorna un ícono específico
   * @param {String} icon - nombre del uso de ícono
   * @returns {HTMLElement} HTML del ícono
   */
  _resolveIcon (icon) {
    if (icon === 'list') {
      return `
          <i class="fas fa-check fa-4x movie__watched-icon"></i>
          <i class="far fa-times-circle fa-4x movie__delete-icon"></i>
      `
    }

    if (icon === 'search') {
      return `<i class="fas fa-eye fa-6x movie__select-icon"></i>`
    }
  }

  /**
   * agrega el anillo de cargando al modal
   */
  loadingAddMovie () {
    this.modalContent.innerHTML += `
    <h3 class='modal__title'>
    Agregando
    <span class='modal__close'>&times</span> 
    </h3>
    `
    this.modalContent.innerHTML = this._getLoadingAnimation()
  }

  _getLoadingAnimation () {
    return `<div class="loading__dual-ring"></div>`
  }
}

export const ui = new UI()
