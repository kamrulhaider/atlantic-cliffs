import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../../components/Service/Service';
import useServices from '../../hooks/useServices';

const Services = () => {
    const [services] = useServices();
    return (
        <div className="mt-5">
            <Container>
                <h2 className="text-center mb-5 fw-bold">Our Therapies</h2>
                <Row xs={1} md={2} className="g-4">
                    {
                        services.map(service => <Service
                            service={service}
                            key={service.key}
                        ></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;