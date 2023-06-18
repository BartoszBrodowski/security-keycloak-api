import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import documents from "./Routes/documents.js";
import authenticate from "./Routes/authenticate.js";

(async function () {
  dotenv.config();
  const app = express();

  const { PORT } = process.env;

  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );

  app.use(express.json());

  app.listen(PORT, () => {
    console.log(`Express API listening on port ${PORT}`);
  });

  app.use("/documents", authenticate, documents);
})();
