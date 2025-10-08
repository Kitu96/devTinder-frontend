import React from "react";

export default function FeedCard({ user }) {
  const { firstName, lastName, age, photoUrl, about, gender } = user;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={photoUrl} alt="photoUrl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && <p>{age + "," + gender}</p>}
          <p>{about}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Igonre</button>
            <button className="btn btn-secondary">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
}
