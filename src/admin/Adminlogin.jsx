import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Adminlogin = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  let handleSubmit = e => {
    e.preventDefault();
    if (username == "admin" && password == "admin") {
      navigate("/admindashboard");
      toast.success("ADMIN login success");
    } else {
      toast.error("Please check username and password");
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h2>ADMIN LOGIN PAGE</h2>
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
      </form>
    </div>
  );
};

export default Adminlogin;
