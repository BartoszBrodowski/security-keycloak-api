import jwtmod from "jsonwebtoken";

const func = async (req, res, next) => {
  try {
    const bearerHeader = req.headers["authorization"];
    const token = bearerHeader && bearerHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);

    const public_key = `-----BEGIN PUBLIC KEY-----\n${process.env.PUBLICKEY}\n-----END PUBLIC KEY-----`;
    const decodedToken = jwtmod.verify(token, public_key, {
      algorithms: ["RS256"],
    });

    const { email } = decodedToken;
    req.user = email;
    next();
  } catch (err) {
    console.log(err);
    res.status(403).send("Invalid Token");
  }
};

export default func;
