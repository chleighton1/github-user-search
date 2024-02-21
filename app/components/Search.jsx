import React from "react";
import IconSearch from "@/public/icon-search";

export default function Search(props) {
  return (
    <div>
      <form className="flex">
        <IconSearch />
        <input></input>
        <button>Search</button>
      </form>
    </div>
  );
}
