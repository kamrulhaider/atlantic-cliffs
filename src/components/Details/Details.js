import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Details.css'

const Details = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();
    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch(`https://radiant-gorge-11723.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('https://radiant-gorge-11723.herokuapp.com/users', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Placed');
                    reset();
                }
            })
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 service-details">
                    <div>
                        <img src={details.img} alt="" />
                    </div>
                    <h3>{details.name}</h3>
                    <p>{details.description}</p>
                    <h5>Price: {details.price}</h5>
                </div>

                <div className="col-md-6 px-4">
                    <h5 className="text-center mb-5">Submit your details for placing order</h5>
                    <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control mb-3" {...register("name", { required: true })} value={user.displayName} />
                        <input className="form-control mb-3" type="email" {...register("email", { required: true })} value={user.email} />
                        <textarea className="form-control mb-3" {...register("address", { required: true })} placeholder="Address" />
                        <input className="form-control mb-3" {...register("serviceName", { required: true })} value={details.name} />
                        <input className="form-control mb-3" {...register("price", { required: true })} value={details.price} />
                        <input className="btn btn-danger" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Details;