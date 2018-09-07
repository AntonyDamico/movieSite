# Movie List

## English
App to store movies you want to watch and movies you've watched too, it is just a demo app for a full site so it doesn't have any kind of authentication, anybody can add, move and delete movies.

It is a single page app built with pure JavaScript on the front end and Django as a back end, it uses the fetch() api and ajax calls to add, edit and remove data
[Try out the app](https://lit-hamlet-85099.herokuapp.com/movieList/)


## Español
Aplicación para guardar las películas que quieres ver y también las que has visto, es solo un demo para un sitio completo así que no tiene ningún tipo de autenticación, cualquiera puede agregar, mover y borrar películas.

Es una aplicación de una sola página construida con JavaScript purto on el front end y Django como back end, usa la api fetch() y llamadas de tipo ajax para agregar, editar y remover información.
[Prueba la app aquí](https://lit-hamlet-85099.herokuapp.com/movieList/)

### Prerequisites
You need to have [Python](https://www.python.org/downloads/) and [Django](https://www.djangoproject.com/) to run the app and [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/) for development.

### Installing
To run the server you need to install the necessary python packages and then use the manage.py inside the project and it will use the port 8000 by default

```
pip install requirements.txt
python manage.py runserver
```

To develop on it, you need to have the node packages and the start webpack with the script on the package.json file
```
npm install
npm run watch
```

### Built With
* [Django](https://www.djangoproject.com/) - The web framework used.
* [npm](https://www.npmjs.com/) - Package manager.
* [Webpack](https://webpack.js.org/) - Build tool.
  - [Babel](https://babeljs.io/) - js compiler.
  - [PostCSS](https://postcss.org/) - css preprocessor.


