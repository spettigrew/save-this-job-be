require("dotenv").config()
const OktaJwtVerifier = require("@okta/jwt-verifier");


const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: process.env.OKTA_ORG,
  clientId: process.env.OKTA_CLIENT_ID,
  assertClaims: {
    aud: "api://default"
  }
});

function authenticationRequired(req, res, next) {
  console.log('hit')
  if(process.env.NODE_ENV === 'test') {
    return next();
  }
  
  const authHeader = req.headers.authorization || "";
  const match = authHeader.match(/Bearer (.+)/);

  if (!match) {
    return res
      .status(401)
      .json({ message: "Please try logging in first, then try again!" });
  }

  const accessToken = match[1];
  const expectedAudience = "api://default";

  return oktaJwtVerifier
    .verifyAccessToken(accessToken, expectedAudience)
    .then(jwt => {
    
      req.jwt = jwt;
      next();
    })
    .catch(err => {
      res.status(401).json(err.message);
      console.log(err);
    });
}

module.exports = authenticationRequired;
