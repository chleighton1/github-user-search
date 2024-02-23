"use client";

import React from "react";
import IconSearch from "@/public/icon-search";

export default function Search(props) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="bg-card-light dark:bg-card-dark shadow-lg px-5 py-3 rounded-xl mb-8">
      <form className="flex items-center gap-2">
        <IconSearch />
        <input
          className=" min-w-0 text-xs flex-grow px-2 py-2 bg-inherit dark:placeholder:text-white rounded-lg focus:outline-none"
          type="text"
          placeholder="Search Github username..."
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 text-sm bg-blue-all text-white rounded-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
}
