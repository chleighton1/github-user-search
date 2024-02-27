"use client";

import { React, useState } from "react";
import { getData } from "../lib/getData";

export default function Search({ setUserData, error, setError }) {
  const [user, setUser] = useState("");

  function handleChange(event) {
    setUser(event.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await getData(user, setUserData);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <div className="bg-card-light dark:bg-card-dark shadow-lg px-3 py-3 rounded-xl mb-8">
        <form className="flex items-center gap-2" onSubmit={handleSubmit}>
          <svg
            height="25"
            width="25"
            fill="#0079FF"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 md:ml-4"
          >
            <path d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z" />
          </svg>
          <input
            className=" min-w-0 text-xs md:text-lg flex-grow px-2 py-2 bg-inherit dark:placeholder:text-white rounded-lg focus:outline-none"
            type="text"
            placeholder="Search Github username..."
            onChange={handleChange}
            value={user}
          />
          {error && (
            <p className="text-red-400 text-xs text-center mr-2">{error}</p>
          )}
          <button className="px-4 py-2 md:px-8 md:py-3 text-sm md:text-lg bg-blue-all text-white rounded-lg ">
            Search
          </button>
        </form>
      </div>
    </>
  );
}
