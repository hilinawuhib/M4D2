import React from "react";
import { Card } from "react-bootstrap";
import horror from "../horror.json";

const LatestReleases = () => {
  return (
    <div className="bookwrap">
      {horror.map((book) => {
        return (
          <div className="book-cover">
            <Card >
              <Card.Img className="card-image" variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <h5>{book.category}</h5>
                <h5>{book.price}</h5>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default LatestReleases;
