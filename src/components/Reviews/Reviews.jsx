import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, ListGroup, Spinner, Alert } from 'react-bootstrap';
import { ReviewsList } from 'components/Services/ReviewsList';

const Reviews = () => {
  const { moviesId } = useParams();
  const [loading, setLoading] = useState(false);
  const [revs, setRevs] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const revsData = await ReviewsList(moviesId);
        setRevs(revsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [moviesId]);

  const showReviews = revs && revs.results && revs.results.length > 0;

  return (
    <>
      {loading && <Spinner animation="border" role="status" />}
      {error && <Alert variant="danger">{error}</Alert>}
      {showReviews ? (
        <ListGroup>
          {revs.results.map(rev => (
            <ListGroup.Item key={rev.id}>
              <Card>
                <Card.Body>
                  <Card.Title>Author: {rev.author}</Card.Title>
                  <Card.Text>{rev.content}</Card.Text>
                </Card.Body>
              </Card>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <Alert variant="info">We don't have any reviews for this movie.</Alert>
      )}
    </>
  );
};

export default Reviews;
