const session = require("express-session");
const Keycloak = require("keycloak-connect");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:8080",
  })
);

app.listen(3000, () => {
  console.log("Express API listening on port 3000");
});
