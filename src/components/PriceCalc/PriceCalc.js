import React from 'react';
import './PriceCalc.css'

const PriceCalc = () => {
    return (
        <div className="my-5 container">
            <div className="text-center">
                <h6 className="fw-bold">PRICE CALCULATOR</h6>
                <h2 className="fw-bold">Estimate your delivery cost</h2>
                <p>
                    This is an estimated price. Actual price will be provided during the submission of the delivery
                    order considering delivery distance, delivery urgency, number of items and demand for the
                    service. Surcharge may apply during the time of high demand.
                </p>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-10 p-4">
                    <div className="row cost-form justify-content-around align-items-center py-3">
                        <div className="col-lg-5 col-md-4 mb-md-0 mb-2">
                            <input type="text" className="cost-input px-2 py-2" placeholder=" Pickup from" />
                        </div>
                        <div className="col-lg-5 col-md-4 mb-md-0 mb-2">
                            <input type="text" className="cost-output px-2 py-2" placeholder="Deliverd to" />
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <button className="btn text-light btn-outline-primary py-2 fw-bold w-100" type="button">Check
                                price</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceCalc;