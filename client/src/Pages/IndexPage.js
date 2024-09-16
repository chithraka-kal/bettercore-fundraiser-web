import React,{useContext} from "react";
import {UserContext} from "../context/UserContext";
function Header() {
  const { userInfo } = useContext(UserContext);
  return (
    <div>
      <h1>Index Page Working!</h1>
      <h2>
        {userInfo
          ? `Welcome ${userInfo.fname} ${userInfo.lname}`
          : "Welcome Guest"}
      </h2>
    </div>
  );
}

export default Header;
