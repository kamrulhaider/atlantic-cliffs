import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import "./MyOrder.css";

const MyOrder = () => {
  const { user } = useAuth();
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://atlantic-clifs-api.onrender.com/users")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  const result = list.filter((data) => data.email === user.email);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete?");
    if (proceed) {
      const url = `https://atlantic-clifs-api.onrender.com/users/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingUser = list.filter((user) => user._id !== id);
            setList(remainingUser);
          }
        });
    }
  };

  return (
    <div className="myOrder my-5">
      <h3 className="text-success text-center mb-5">Your order list</h3>
      {result.map((details) => (
        <h4 className="text-center my-all" key={details._id}>
          {details.serviceName}{" "}
          <button
            onClick={() => handleDelete(details._id)}
            className="btn btn-danger"
          >
            X
          </button>
        </h4>
      ))}
    </div>
  );
};

export default MyOrder;
