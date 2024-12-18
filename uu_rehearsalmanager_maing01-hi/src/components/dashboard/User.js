// src/components/dashboard/User.js

import React from "react";
import { PersonItem } from "uu_plus4u5g02-elements";

const User = ({ user }) => {
  // user je uuIdentity string
  return (
    <div className="user">
      <PersonItem uuIdentity={user} />
    </div>
  );
};

export default User;