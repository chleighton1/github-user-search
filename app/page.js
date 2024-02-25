"use client";

import Image from "next/image";
import Search from "./components/Search";
import ThemeSwitch from "./components/ThemeSwitch";
import Card from "./components/Card";
import { React, useState } from "react";
import { DateTime } from "luxon";

export default function Home() {
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
    twitter: "Not Available",
    company: "@github",
  });

  return (
    <main className="p-6">
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl text-card-dark dark:text-white font-medium">
          devfinder
        </h1>
        <ThemeSwitch />
      </div>
      <Search setUserData={setUserData} />
      <Card userData={userData} />
    </main>
  );
}
