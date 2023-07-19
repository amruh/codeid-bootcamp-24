"use client"
import regionApi from "@/app/api/regionApi";
import { useState } from "react";

export default function CreateRegion() {
    const [value, setValue] = useState({
        name: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        regionApi.create(value).then(() => {
            alert("data berhasil ditambahkan");
        });
    }
  return (
    <div className="max-w-sm mx-auto p-6">
        <h1 className="text-center">Create Region</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Region Name
          </label>
          <input
            value={value.name}
            type="text"
            id="region_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            onChange={(e) => setValue({name: e.target.value})}
          />
        </div>
    
        <button
          type="submit"
          className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
