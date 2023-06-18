import express from "express";

const router = express.Router();

const data = [
  { title: "The Shawshank Redemption", description: "Very good" },
  { title: "The Shawshank Redemption 2", description: "Very good 2" },
  { title: "The Shawshank Redemption 3", description: "Very good 3" },
  { title: "The Godfather", description: "Very good" },
  { title: "The Godfather 2", description: "Very good 2" },
  { title: "The Godfather 3", description: "Very good 3" },
  { title: "The Dark Knight", description: "Very good" },
  { title: "The Dark Knight 2", description: "Very good 2" },
  { title: "The Dark Knight 3", description: "Very good 3" },
];

const getMovies = async (req, res) => {
  try {
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

router.get("/", getMovies);

export default router;
