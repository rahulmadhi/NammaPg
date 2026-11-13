import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Usersignup = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [adhar, setAdhar] = useState("");
  let navigate = useNavigate();

  let handleSubmit = e => {
    e.preventDefault();
    let payload = { username, password, email, phone, adhar };
    axios.post("http://localhost:4000/users", payload);
    toast.success("User registerd successfully!");
    navigate("/userlogin");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h2>USER SIGNUP PAGE</h2>
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
          <label htmlFor="">EMAIL : </label>
          <input
            type="email"
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">PHONE : </label>
          <input
            type="number"
            onChange={e => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">ADHAR NUMBER : </label>
          <input
            type="number"
            onChange={e => {
              setAdhar(e.target.value);
            }}
          />
        </div>
        <div>
          <button>SIGNUP</button>
          <button>CANCEL</button>
        </div>
        <Link to={"/userlogin"}>already have account ? click here</Link>
      </form>
    </div>
  );
};

export default Usersignup;
