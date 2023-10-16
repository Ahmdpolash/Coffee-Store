import { useLoaderData } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import CoffeeCard from "./Components/CoffeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-3xl text-[#331A15] font-semibold py-3">
        Our Popular Products {coffees.length}{" "}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-4">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
