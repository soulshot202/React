import React, { useContext } from "react";
import { userContext } from "../../App";

export default function Company() {
  const { user } = useContext(userContext);

  return (
    <div>
      <h3>Company</h3>
      <p>
        {user.company?.name} {user.company?.catchPhrase}
      </p>
    </div>
  );
}
