import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import FeedCard from "./FeedCard";

export default function Profile() {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  const feedUrl = async () => {
    if (feed) return;
    try {
      const res = await axios(BASE_URL + "/feed", { withCredentials: true });
      dispatch(addFeed(res.data));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    feedUrl();
  }, []);

  return (
    feed && (
      <div className="flex justify-center my-10">
        <FeedCard user={feed[0]} />
      </div>
    )
  );
}
