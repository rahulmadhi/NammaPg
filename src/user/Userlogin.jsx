import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Userlogin = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  let handleSubmit = e => {
    e.preventDefault();
    axios.get("http://localhost:4000/users").then(x => {
      let info = x.data;
      let data = info.find(x => {
        return x.username == username && x.password == password;
      });
      if (data) {
        toast.success("User logged in succesfully");
        navigate("/userdashboard");
      } else {
        toast.error("Please check username and password !");
      }
    });
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h2>USER LOGIN PAGE</h2>
        <div>
          <label htmlFor="">USERNAME : </label>
          <input
            type="text"
            onChange={e => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">PASSWORD : </label>
          <input
            type="password"
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <button>LOGIN</button>
          <button>CANCEL</button>
        </div>
        <Link to={"/usersignup"}>Create account here!</Link>
      </form>
    </div>
  );
};

export default Userlogin;
