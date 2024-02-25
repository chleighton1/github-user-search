"use client";

import { React, useState } from "react";
import IconSearch from "@/public/icon-search";
import { getData } from "../lib/getData";
import { DateTime } from "luxon";

export default function Search({ setUserData }) {
  const [user, setUser] = useState("");

  function handleChange(event) {
    setUser(event.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await getData(user);
    setUserData(() => ({
      name: data.name,
      avatar_url: data.avatar_url,
      login: data.login,
      joined: DateTime.fromISO(data.created_at),
      bio: data.bio,
      repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      location: data.location,
      blog: data.blog,
      twitter: data.twitter_username,
      company: data.company,
    }));
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
