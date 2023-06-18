import express from "express";

const router = express.Router();

const data = {
  "test2@test.com": [
    "i am sorry",
    "not my fault",
    "binance is bad",
    "kevin is my best friend",
  ],
  "test@test.com": [
    {
      title: "The Shawshank Redemption",
      description: "Very good",
      rating: 9.3,
    },
    { title: "The Godfather", description: "Very good", rating: 9.2 },
    { title: "The Dark Knight", description: "Very good", rating: 9 },
  ],
};

const getReviews = async (req, res) => {
  try {
    const email = req.user;
    res.status(200).send(data[email]);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

router.get("/", getReviews);

export default router;
