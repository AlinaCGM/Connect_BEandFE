import React, { useEffect, useState } from "react";
import { Users } from "../../../../types/type";
import axios from "axios";
import { Box } from "@mui/system";

export default function UserInformation() {
  const url = `http://localhost:8001/users/2`;

  const [user, setUser] = useState<Users[]>([]);

  function fetchData() {
    axios.get(url).then((res) => {
      setUser(res.data);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(user, "user");
  return (
    <div>
      <Box>
        {user.map((user) => {
          return (
            <div key={user.id}>
              <div>{user.firstName}</div>
              <div>{user.lastName}</div>
              <div>{user.maidenName}</div>
              <img src={user.image} alt="smth" />
            </div>
          );
        })}
      </Box>
    </div>
  );
}
