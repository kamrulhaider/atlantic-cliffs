import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Details = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();
    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/users', data)
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
                <div className="col-md-6">
                    <div>
                        <img src={details.img} alt="" />
                    </div>
                    <h3>{details.name}</h3>
                    <p>{details.description}</p>
                    <h5>Price: {details.price}</h5>
                </div>

                <div className="col-md-6">
                    <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control mb-3" {...register("name", { required: true })} value={user.displayName} />
                        <input className="form-control mb-3" type="email" {...register("email", { required: true })} value={user.email} />
                        <textarea className="form-control mb-3" {...register("address", { required: true })} placeholder="Address" />
                        <input className="form-control mb-3" {...register("serviceName", { required: true })} value={details.name} />
                        <input className="btn btn-danger" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Details;