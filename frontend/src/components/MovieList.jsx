import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const MovieList = ({ token }) => {
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
      .get("/movielist", config)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return data ? (
    <div>
      <h1 className="mb-8">Movie List</h1>
      <ul className="grid grid-cols-3 grid-rows-3 gap-4">
        {data.map((movie, i) => (
          <li
            className="bg-white rounded-lg shadow-md text-black text-left p-8"
            key={i}
          >
            <h1 className="text-2xl">{movie.title}</h1>
            <p>{movie.description}</p>
            <p>{movie.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default MovieList;
