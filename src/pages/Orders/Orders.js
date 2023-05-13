import React, { useState, useEffect } from "react";
import "./Orders.css";

const Orders = () => {
  const [user, setUser] = useState([]);
  const [pending, setPending] = useState("Pending");

  useEffect(() => {
    fetch("https://atlantic-cliffs-server-production.up.railway.app/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete?");
    if (proceed) {
      const url = `https://atlantic-cliffs-server-production.up.railway.app/users/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingUser = user.filter((user) => user._id !== id);
            setUser(remainingUser);
          }
        });
    }
  };

  const handlePending = () => {
    setPending("Approved");
  };

  return (
    <div className="container orders">
      <div className="row align-items-center flex-column">
        <div className="col-md-8">
          {user.map((every) => (
            <div
              key={every._id}
              className="d-md-flex justify-content-evenly border rounded-3 my-5 py-3 every-order"
            >
              <div>
                <h5>Customer Name: {every.name}</h5>
                <h5>Email: {every.email}</h5>
                <p>Status: {pending}</p>
              </div>
              <div>
                <h6 className="text-decoration-underline">Orders:</h6>
                <p>{every.serviceName}</p>
                <p>tk. {every.price}</p>
              </div>
              <div className="d-flex flex-column">
                <button
                  onClick={() => handleDelete(every._id)}
                  className="btn btn-danger my-3"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          <button onClick={handlePending} className="btn bg-success text-light">
            Approve All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
