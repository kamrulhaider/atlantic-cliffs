import React, { useState, useEffect } from 'react';

const Orders = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('https://radiant-gorge-11723.herokuapp.com/users')
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