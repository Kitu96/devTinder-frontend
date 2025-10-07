import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { addUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Body() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const fetchURL = async () => {
    if (!user) return;
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
      if (user.status === 401) {
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchURL();
  }, []);

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
