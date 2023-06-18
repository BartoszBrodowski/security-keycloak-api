import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Protected = ({ token }) => {
  const isRun = useRef(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;

    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    axios
      .get("/documents", config)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return data ? (
    <div className="flex flex-col gap-8">
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

export default Protected;
