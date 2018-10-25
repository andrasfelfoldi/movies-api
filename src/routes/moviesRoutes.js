import {addNewMovie, getMovies, getMovieWithID, updateMovie, deleteMovie} from '../controllers/moviesController';

const moviesRoutes = (app) => {

    app.route('/movies')
        .get(getMovies)
        .post(addNewMovie);

    app.route('/movies/:movieId')
        .get(getMovieWithID)
        .put(updateMovie)
        .delete(deleteMovie);
    
}

export default moviesRoutes;