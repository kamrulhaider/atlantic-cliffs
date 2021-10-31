import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Service from '../../components/Service/Service';
import useServices from '../../hooks/useServices';

const Services = () => {
    const [services] = useServices();

    if (services.length === 0) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <div className="my-5">
            <Container>
                <h3 className="text-center mb-2 fw-bold">Service List</h3>
                <p className="text-center mb-5">Atlantic Cliff uses an artificial intelligence based system that tracks real-time data ensuring fast delivery. Whether your delivery is for your customer or someone you care for, we will deliver it with care.</p>
                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(service => <Service
                            service={service}
                            key={service._id}
                        ></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;