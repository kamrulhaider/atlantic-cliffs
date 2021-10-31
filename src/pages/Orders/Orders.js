import React, { useState, useEffect } from 'react';

const Orders = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);

    return (
        <div>
            {
                user.map(every => <div>
                    <h1>{every.name}</h1>
                </div>)
            }
        </div>
    );
};

export default Orders;