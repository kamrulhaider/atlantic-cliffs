import React from 'react';
import banner from '../../images/banner.png';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="home">
                <div className="container d-flex align-items-center">
                    <div className="row align-items-center">
                        <div className="col-lg-6 py-md-5 py-2">
                            <div>
                                <h1 className="fw-bold">Atlantic Cliff doesn’t deliver boxes only, we connect people and
                                    community with care
                                </h1>
                                <p>
                                    On-demand and same day delivery for businesses and individuals, 7 days a week
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 py-md-5">
                            <img className="img-fluid mt-5" src={banner} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;