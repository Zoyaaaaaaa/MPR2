import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import './index.scss'; // Import the SCSS file

function JobCard() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Card 
      className={`job-card ${isClicked ? 'clicked-card' : ''}`} // Apply the 'job-card' class
      onClick={handleClick} 
    >
      <Card.Img 
        variant="top" 
        src="https://media.licdn.com/dms/image/C4E0BAQGRVdKtnFp3jQ/company-logo_200_200/0/1630602965594/naztec_international_group_logo?e=2147483647&v=beta&t=x0Vpuf3jrbHYvfwktkC7ZRkeD14vYxE4MNe7XVtL3HI" 
        className="card-img-top" // Apply the 'card-img-top' class
      />
      <Card.Body>
        <Card.Title>Job Title</Card.Title>
        <Card.Text>
          Location
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Employer Name</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="primary" href="#" className="search-button">Employer Website</Button>
        <Button variant="secondary" as={Link} to="#" className="search-button">Know More</Button>
      </Card.Body>
    </Card>
  );
}

export default JobCard;
