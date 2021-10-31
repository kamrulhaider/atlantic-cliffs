import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {

    // using destructuring
    const { _id, img, name, description, price } = props.service;
    return (
        <div>
            <Col>
                <Card className="service p-2">
                    <Card.Img className="service-img" variant="top" src={img} />
                    <Card.Body className="service-body">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 100)}...
                        </Card.Text>
                        <h5>Price: {price}</h5>
                        <Link to={`/details/${_id}`}>
                            <button className="btn btn-outline-dark">Order Now</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>

        </div >
    );
};

export default Service;