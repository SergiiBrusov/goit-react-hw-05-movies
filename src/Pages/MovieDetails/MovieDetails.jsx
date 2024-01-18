import React from 'react';
import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { FullInfo } from 'components/Services/FullInfo';
import { useState, useEffect, useRef } from 'react';
import { Loader } from 'components/Loader';
import { Error } from 'components/Error';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col } from 'react-bootstrap';

export const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const { moviesId } = useParams();
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!moviesId) return;

    const fetchMoviesDetails = async () => {
      try {
        setLoading(true);
        const movieInfo = await FullInfo(moviesId);
        setInfo(movieInfo);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesDetails();
  }, [moviesId]);

  const showPosts = info && Object.keys(info).length > 0;

  return (
    <div>
      {loading && <Loader />}
      {error && <Error message={error} />}
      {showPosts && (
        <div key={moviesId} className="container mt-4">
          <Link
            to={backLinkHref.current}
            className="btn btn-primary shadow mb-3"
          >
            &#8592; Back
          </Link>
          <div className="row">
            <div className="col-md-4">
              <Card className="shadow">
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${info.backdrop_path}`}
                  alt={info.title || info.name}
                />
              </Card>
            </div>
            <div className="col-md-8">
              <div className="d-flex flex-column gap-2">
                <h1>
                  {info.title || info.name} ({info.release_date})
                </h1>
                <p>User Score: {Math.round(info.vote_average * 10)}%</p>
                <h2>Overview</h2>
                <p>{info.overview}</p>
                <h3>Genres</h3>
                <p>
                  {info.genres &&
                    info.genres.map(genre => genre.name).join(', ')}
                </p>
              </div>
            </div>
          </div>
          <div className="shadow-sm p-4 mt-4">
            <h4>Additional information</h4>
            <Row>
              <Col>
                <Card className="shadow">
                  <Card.Body>
                    <Card.Title>
                      <Link to={`cast`} className="btn btn-outline-dark">
                        Cast
                      </Link>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="shadow">
                  <Card.Body>
                    <Card.Title>
                      <Link to={`reviews`} className="btn btn-outline-dark">
                        Reviews
                      </Link>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
