
import React from "react";
import { Card } from "react-bootstrap";
import scifi from "../scifi.json";

export const LatestReleases = () => {
  return (
    <div className="bookwrap">
      {scifi.map((book) => {
        return (
          <Card className="book-cover ">
            <Card.Img className="card-image " variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <h5>{book.category}</h5>
              <h5>{book.price}</h5>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default LatestReleases;