const userMod = require("../users/users-model");

async function checkUser(req, res, next) {

  if (process.env.NODE_ENV === 'test') {
    req.userId = 1;
    return next();
  }

  try {
    console.log(req.jwt)
    const firstName = req.jwt.claims.firstName;
    const lastName = req.jwt.claims.lastName;
    const email = req.jwt.claims.email;
    const user = await userMod.findByEmail(email);

    if (user) {
      req.userId = user.id;
      
      next();
    } else {
      const appUser = {
        firstName,
        lastName,
        email
      };
      const [id] = await userMod.add(appUser);
      if (id) {
        req.userId = id;
        next();
      } else {
        res.status(500).json({ message: "Failed saving user to database" });
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = checkUser;
