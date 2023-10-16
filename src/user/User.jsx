import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Swal from "sweetalert2";

const User = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://module-56-server-side-ho81vo830-polashs-projects.vercel.app/user/${id}`,{
            method: 'DELETE',
            headers: {
                'content-type' : 'application/json'
            },
           
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const remaining = users.filter(user => user._id !== id)
            setUsers(remaining)
          });
      }
    });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>CreatedAt</th>
              <th>LastLoggedAt</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr className="bg-base-200" key={user._id}>
                <th>1</th>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastLoggedAt}</td>
                <td>
                  <button onClick={() => handleDelete(user._id)}>X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
