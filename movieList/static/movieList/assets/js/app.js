import { openMovieDB } from './modules/OpenMovieDB'
import { ui } from './modules/UI'
import { userMovieDB } from './modules/UserMovieDB'

// window.onload = function () {
//   console.log(userMovieDB.getMovies())
// }

// Eventos del form de búsqueda
ui.searchBtn.addEventListener('click', e => {
  e.preventDefault()
  const input = ui.searchInput.value
  if (input) {
    ui.showAlert('Cangando Películas', 'info')
    openMovieDB
      .searchMovie(input)
      .then(res => ui.showSearch(res.Search))
      .catch(err => {
        console.log(err + ' linea 13 app.js')
        ui.showAlert('Algo ha salido mal, intente de nuevo', 'danger')
      })
  } else {
    ui.showAlert('Ingrese el nombre', 'danger')
  }
})

// Evento en el modal para agregar una película
ui.modalContent.addEventListener('click', e => {
  if (e.target.classList.contains('fa-eye')) {
    ui.loadingAddMovie()
    ui.getMovieId(e.target, openMovieDB.currentSearch)
      .then(id => openMovieDB.getMovieById(id))
      .then(movieData => userMovieDB.postMovie(movieData))
      .then(res => ui.addMovie(res))
      .catch(err => {
        console.log(err + ' linea 28 app.js')
        ui.showAlert('Algo ha salido mal, intente de nuevo', 'danger')
        ui._closeModal()
      })
  }
})

// Evento en la lista de películas para quitar o dejar vista alguna
ui.movieGrid.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'i') {
    let selectedMovie = e.target.parentElement
    let confirmMsg = '¿Desea quitar la película?'
    let alertMsg = 'Película Eliminada'
    // Si es 1 significa que se quiere eliminar la película
    let methodDelete = 1
    if (e.target.classList.contains('fa-check')) {
      confirmMsg = '¿Desea agregar a películas vistas?'
      alertMsg = 'Película Agregada a Vistos'
      // Si es 0 significa que solo se quiere enviar a vistas
      methodDelete = 0
    }
    if (ui.removeMovie(selectedMovie, confirmMsg)) {
      if (methodDelete) {
        userMovieDB.deleteMovie(selectedMovie)
      } else {
        userMovieDB.watchedMovie(selectedMovie)
      }
      ui.showAlert(alertMsg, 'info')
    }
  }
})
