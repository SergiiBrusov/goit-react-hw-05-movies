import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DayList } from 'components/Services/DailyList';
import css from './Home.module.css';
import { Loader } from 'components/Loader';
import { Error } from 'components/Error';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const moviesPost = await DayList();
        setMovies(moviesPost.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const showPosts = Array.isArray(movies) && movies.length;

  return (
    <div className={`container ${css.container}`}>
      {loading && <Loader />}
      {error && <Error message={error} />}
      <h1 className={`mt-4 ${css.title}`}>Trending today</h1>
      <ul className="list-group">
        {showPosts &&
          movies.map(movie => (
            <li key={movie.id} className={`list-group-item ${css.movies}`}>
              <Link to={`/movies/${movie.id}`} className="text-decoration-none">
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
