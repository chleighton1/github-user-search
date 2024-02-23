"use client";

import React from "react";
import IconLocation from "@/public/icon-location";
import IconWebsite from "@/public/icon-website";
import IconTwitter from "@/public/icon-twitter";
import IconCompany from "@/public/icon-company";
import { useTheme } from "next-themes";

export default function Card(props) {
  const theme = useTheme();

  const fill = theme.theme == "dark" ? "#ffffff" : "#24292f";

  return (
    <div className="bg-card-light dark:bg-card-dark shadow-lg px-5 py-3 rounded-xl">
      <div className="flex justify-start gap-5 items-center mb-6 mt-6">
        <svg width="98" height="96" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
            fill={fill}
          />
        </svg>
        <div>
          <h1 className="text-card-dark dark:text-white text-lg">User Name</h1>
          <h3 className="text-md text-blue-all">@username</h3>
          <h3>Joined 25 Jan 2011</h3>
        </div>
      </div>

      <p className="mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut.
      </p>
      <section className="flex p-4 bg-bg-light dark:bg-bg-dark rounded-lg items-center justify-around text-center mb-8">
        <div>
          <h3 className="text-sm mb-2">Repos</h3>
          <p className="text-card-dark dark:text-white text-lg font-bold">8</p>
        </div>
        <div>
          <h3 className="text-sm mb-2">Followers</h3>
          <p className="text-card-dark dark:text-white text-lg font-bold">
            3938
          </p>
        </div>
        <div>
          <h3 className="text-sm mb-2">Following</h3>
          <p className="text-card-dark dark:text-white text-lg font-bold">9</p>
        </div>
      </section>
      <div className="grid dark:text-white grid-flow-row grid-cols-contact gap-2 grid-rows-4 mb-6">
        <IconLocation className="fill-current" />

        <p>San Francisco</p>

        <IconWebsite className="fill-current" />
        <p>https://github.blog</p>

        <IconTwitter className="fill-current" />
        <p>Not Available</p>

        <IconCompany className="fill-current" />
        <p>@github</p>
      </div>
    </div>
  );
}
