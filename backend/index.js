import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import movies from "./Routes/movies.js";
import authenticate from "./Routes/authenticate.js";
import reviews from "./Routes/reviews.js";

(async function () {
  dotenv.config();
  const { PORT } = process.env;
  const app = express();
  app.use(express.json());
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );

  app.use("/movielist", authenticate, movies);
  app.use("/reviews", authenticate, reviews);

  app.listen(PORT, () => {
    console.log(`Express API listening on port ${PORT}`);
  });
})();
