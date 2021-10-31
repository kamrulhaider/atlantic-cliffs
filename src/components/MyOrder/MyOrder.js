import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth();
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('https://radiant-gorge-11723.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setList(data));
    }, [])

    const result = list.filter(data => data.name === user.displayName);

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure to delete?")
        if (proceed) {
            const url = `https://radiant-gorge-11723.herokuapp.com/users/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainingUser = list.filter(user => user._id !== id)
                        setList(remainingUser)
                    }
                })
        }
    };

    return (
        <div>
            <h1 className="text-success text-center mb-5">Your order list</h1>
            {
                result.map(details => <h2 className="text-center" key={details._id}>{details.serviceName} <button onClick={() => handleDelete(details._id)} className="btn btn-danger">X</button></h2>)
            }
        </div>
    );
};

export default MyOrder;