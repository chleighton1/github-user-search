"use client";

import Search from "./components/Search";
import ThemeSwitch from "./components/ThemeSwitch";
import Card from "./components/Card";
import { React, useState } from "react";
import { DateTime } from "luxon";
import { getData } from "./lib/getData";

export default function Home() {
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState({
    name: "The Octocat",
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    login: "octocat",
    joined: DateTime.fromISO("2011-01-25T18:44:36Z"),
    bio: "",
    repos: 8,
    followers: 12404,
    following: 9,
    location: "San Francisco",
    blog: "https://github.org",
    twitter: "",
    company: "@github",
  });

  const handleClick = () => {
    try {
      getData("octocat", setUserData);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main className="p-6 min-w-96 md:max-w-2xl lg:max-w-3xl mx-auto">
      <div className="flex justify-between mb-8 md:mt-10">
        <h1 className="text-3xl text-card-dark dark:text-white font-medium">
          <button onClick={handleClick}>devfinder</button>
        </h1>
        <ThemeSwitch />
      </div>
      <Search setUserData={setUserData} setError={setError} error={error} />
      <Card userData={userData} />
    </main>
  );
}
