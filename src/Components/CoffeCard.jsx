import React from "react";
import { AiFillEdit, AiFillEye } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee,coffees,setCoffees }) => {
  
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleDelete = (_id) => {
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
        fetch(`https://module-56-server-side-ho81vo830-polashs-projects.vercel.app//coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
            }
            const remaining = coffees.filter(coffee => coffee._id !==_id)
            setCoffees(remaining)
            form.reset()
          });
      }
    });
  };

  return (
    <div>
      <div className="relative border flex w-full h-[240px] items-center max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div className=" relative shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={photo}
            alt="image"
            className="h-[200px] w-[155px] object-cover"
          />
        </div>

        <div className="flex justify-between w-full mr-6 items-center">
          <div className="ml-10 space-y-3">
            <p className="text-[17px]">
              {" "}
              <span className="font-bold">Name : </span> {name}
            </p>
            <p className="text-[17px]">
              {" "}
              <span className="font-bold">Supplier : </span> {supplier}
            </p>
            <p className="text-[17px]">
              {" "}
              <span className="font-bold">Category : </span> {category}
            </p>
          </div>
          <div className="space-y-3 block">
            <button className="bg-[#D2B48C] p-2 rounded-md block">
              <AiFillEye className="text-xl text-white "></AiFillEye>
            </button>
            <Link to={`udatecoffee/${_id}`}>
              <button className="bg-[#3C393B] p-2 mt-2 rounded-md block">
                <AiFillEdit className="text-xl text-white "></AiFillEdit>
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="bg-[#EA4744] p-2 rounded-md block"
            >
              <AiOutlineDelete className="text-xl text-white "></AiOutlineDelete>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
