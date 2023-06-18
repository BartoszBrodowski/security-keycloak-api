import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Reviews = ({ token }) => {
  const [data, setData] = useState(null);
  const isRun = useRef(false);

  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;

    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    axios
      .get("/reviews", config)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return data ? (
    <div className="flex flex-col gap-8">
      <Link className="absolute top-10 left-10" to="/">
        {"<<<"}Back to Menu
      </Link>
      {data.map((review, i) => (
        <div
          className="bg-white rounded-lg shadow-md text-black text-left p-8"
          key={i}
        >
          <h1 className="text-2xl">{review.title}</h1>
          <p>{review.description}</p>
          <p>{review.rating}</p>
        </div>
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Reviews;
