import React, { useContext } from "react";
import { userContext } from "../../App";

export default function Website() {
  const { user } = useContext(userContext);

  return <div>{user.website}</div>;
}
