import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './New.css'

const New = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://radiant-gorge-11723.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };

    return (
        <div className="new-order">
            <div className="text-center container py-5">
                <h1>Add New Service</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    <textarea {...register("description")} placeholder="Description" />
                    <input className="form-control" type="number" {...register("price")} placeholder="price" />
                    <input className="form-control" {...register("img")} placeholder="image url" />
                    <input className="btn btn-outline-light" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default New;