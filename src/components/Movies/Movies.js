// Import useSelector: untuk mengakses state redux
import { useSelector } from "react-redux";
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";

function Movies({ title }) {
  /**
   * Gunakan useSelector untuk mengakses state redux.
   * Menerima parameter state (global state).
   * Akses state movies: state global - nama reducer - nama state
   */
  const movies = useSelector((state) => state.movies.movies);

  return (
    <div>
      <div className={styles.container}>
        <section className={styles.movies}>
          <h2 className={styles.movies__title}>{title}</h2>
          <div className={styles.movie__container}>
            {movies.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Movies;
