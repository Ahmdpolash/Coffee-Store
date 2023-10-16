import React from "react";
import Navbar from "./Navbar";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddCoffee = () => {
const navigate = useNavigate()


  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, quantity, supplier, taste, category, details, photo };
    console.log(newCoffee);



    //! sent data to the server

    fetch("https://module-56-server-side-ho81vo830-polashs-projects.vercel.app//coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
       if(data.insertedId){
        toast.success('Coffee Added Successfully')
        form.reset()
        navigate('/')
       }
      });
  };

  return (
    <>
      <Navbar></Navbar>
      <Toaster />
      <div className="bg-[#F4F3F0] p-4">
        <h2 className="text-3xl font-bold ">Add New Coffee </h2>

        <form onSubmit={handleAddCoffee} className="py-4 px-3">
          <div className="flex flex-col lg:flex-row gap-3 px-4 mb-2">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-[17px] font-semibold">
                  Name
                </span>
              </label>
              <label className="input-group w-full">
                <input
                  type="text"
                  placeholder="Coffee Name"
                  name="name"
                  className="input w-full input-bordered"
                />
              </label>
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-[17px] font-semibold">
                  Available Quantity
                </span>
              </label>
              <label className="input-group w-full">
                <input
                  type="text"
                  placeholder="Enter Coffee Quantity"
                  name="quantity"
                  className="input w-full input-bordered"
                />
              </label>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-3 px-4 mb-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-[17px] font-semibold">
                  Supplier Name
                </span>
              </label>
              <label className="input-group w-full">
                <input
                  type="text"
                  placeholder="Enter coffee supplier"
                  name="supplier"
                  className="input w-full input-bordered"
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-[17px] font-semibold">
                  Enter coffee taste
                </span>
              </label>
              <label className="input-group w-full">
                <input
                  type="text"
                  placeholder="Enter Coffee taste"
                  name="taste"
                  className="input w-full input-bordered"
                />
              </label>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-3 px-4 mb-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-[17px] font-semibold">
                  Category
                </span>
              </label>
              <label className="input-group w-full">
                <input
                  type="text"
                  placeholder="Enter Coffee category"
                  name="category"
                  className="input w-full input-bordered"
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-[17px] font-semibold">
                  Details
                </span>
              </label>
              <label className="input-group w-full">
                <input
                  type="text"
                  placeholder="Enter Coffee details"
                  name="details"
                  className="input w-full input-bordered"
                />
              </label>
            </div>
          </div>
          <div className="form-control w-full px-4 mb-4">
            <label className="label">
              <span className="label-text text-[17px] font-semibold">
                Photo
              </span>
            </label>
            <label className="input-group w-full">
              <input
                type="text"
                placeholder="Enter photo URL"
                name="photo"
                className="input w-full input-bordered"
              />
            </label>
          </div>

          <div className="mb-4 px-4">
            <input
              className="bg-[#D2B48C] font-semibold text-[18px] w-full rounded-md py-3 "
              type="submit"
              value="Add Coffee"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCoffee;
