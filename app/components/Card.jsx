import React from "react";

export default function Card(props) {
  return (
    <div>
      {/* User */}
      <div>
        <h1>User Image</h1>
        <div>
          <h1>User Name</h1>
          <h3>@username</h3>
          <h3>Joined 25 Jan 2011</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div>
          <div>
            <h3>Repos</h3>
            <p>8</p>
          </div>
          <div>
            <h3>Followers</h3>
            <p>3938</p>
          </div>
          <div>
            <h3>Following</h3>
            <p>9</p>
          </div>
        </div>
      </div>
    </div>
  );
}
