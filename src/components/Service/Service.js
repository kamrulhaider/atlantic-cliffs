import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {

    // using destructuring
    const { _id, img, name, description, price } = props.service;
    return (
        <div>
            <Col>
                <Card className="border-0 therapy">
                    <Card.Img className="therapy-img" variant="top" src={img} />
                    <Card.Body className="therapy-body">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 150)}...
                        </Card.Text>
                        <h5>Price: {price}</h5>
                        <Link to={`/details/${_id}`}>
                            <button className="btn btn-outline-dark">Buy Now</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>

        </div >
    );
};

export default Service;