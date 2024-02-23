"use client";

import { React, useState } from "react";
import IconSearch from "@/public/icon-search";
import { getData } from "../lib/getData";

export default function Search(props) {
  const [user, setUser] = useState("");

  function handleChange(event) {
    setUser(event.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await getData(user);
    console.log(data);
  }

  return (
    <div className="bg-card-light dark:bg-card-dark shadow-lg px-5 py-3 rounded-xl mb-8">
      <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        <IconSearch />
        <input
          className=" min-w-0 text-xs flex-grow px-2 py-2 bg-inherit dark:placeholder:text-white rounded-lg focus:outline-none"
          type="text"
          placeholder="Search Github username..."
          onChange={handleChange}
          value={user}
        />
        <button className="px-4 py-2 text-sm bg-blue-all text-white rounded-lg ">
          Search
        </button>
      </form>
    </div>
  );
}
