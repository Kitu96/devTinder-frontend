import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

export default function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signUp",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      navigate("/profile");
    } catch (err) {
      console.error(err);
    }
  };

  const handleClick = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        {
          withCredentials: true,
        }
      );

      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data || "something went wrong");
      console.error(err);
    }
  };

  return (
    <div className=" flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center text-3xl">
            {isLoginForm ? "Login" : "SignUp"}
          </h2>
          <div>
            <fieldset className="fieldset">
              {!isLoginForm && (
                <>
                  <span className="fieldset-legend">FirstName</span>
                  <input
                    type="text"
                    value={firstName}
                    className="input"
                    placeholder="Type here"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <span className="fieldset-legend">LastName</span>
                  <input
                    type="text"
                    value={lastName}
                    className="input"
                    placeholder="Type here"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </>
              )}
              <span className="fieldset-legend">Email Id</span>
              <input
                type="text"
                value={emailId}
                className="input"
                placeholder="Type here"
                onChange={(e) => setEmailId(e.target.value)}
              />
              <span className="fieldset-legend">password</span>
              <input
                type="text"
                value={password}
                className="input"
                placeholder="Type here"
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center">
            <button
              className="btn btn-primary"
              onClick={isLoginForm ? handleClick : handleSignUp}
            >
              {isLoginForm ? "Login" : "SignUp"}
            </button>
          </div>
          <p
            className="text-center cursor-pointer"
            onClick={() => setIsLoginForm((value) => !value)}
          >
            {isLoginForm ? "Existing User?Login Here" : "New user?Sign up Here"}
          </p>
        </div>
      </div>
    </div>
  );
}
