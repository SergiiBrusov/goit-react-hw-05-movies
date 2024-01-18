// Cast.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ActorsList } from 'components/Services/ActorsList';
import { Card, ListGroup, Spinner, Alert } from 'react-bootstrap';
import styles from './Cast.module.css'; // Импорт модуля стилей

const Cast = () => {
  const { moviesId } = useParams();
  const [loading, setLoading] = useState(false);
  const [actors, setActors] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        setLoading(true);
        const actorsData = await ActorsList(moviesId);
        setActors(actorsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchActors();
  }, [moviesId]);

  const showActors = actors && actors.length > 0;

  return (
    <>
      {loading && <Spinner animation="border" role="status" />}
      {error && <Alert variant="danger">{error}</Alert>}
      {showActors && (
        <ListGroup>
          {actors.map(actor => (
            <ListGroup.Item key={actor.id}>
              <Card className={`custom-card ${styles.customCard}`}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                  className={`custom-image ${styles.customImage}`} // Используйте пользовательский класс стилей
                />
                <Card.Body>
                  <Card.Title>{actor.name}</Card.Title>
                  <Card.Text>{actor.character}</Card.Text>
                </Card.Body>
              </Card>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
};

export default Cast;
