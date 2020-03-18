// const OktaJwtVerifier = require("@okta/jwt-verifier");

// const jwtAuth = new OktaJwtVerifier({
//   issuer: `https://${process.env.OKTA_ORG}/oauth2/default`,
//   clientId: "0oa4246ntis4ZkuTd4x6",
//   assertClaims: {
//     aud: "api://default"
//   }
// });

// function authenticationRequired(req, res, next) {
//   const authHeader = req.headers.authorization || "";
//   const match = authHeader.match(/Bearer (.+)/);

//   if (!match) {
//     return res.status(401).end();
//   }

//   const accessToken = match[1];
//   const expectedAudience = "api://default";

//   return OktaJwtVerifier.verifyAccessToken(accessToken, expectedAudience)
//     .then(jwt => {
//       req.jwt = jwt;
//       next();
//     })
//     .catch(err => {
//       res.status(401).send(err.message);
//     });
// }

// module.exports = authenticationRequired;
