require("dotenv").config();
var jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req?.cookies?.token;
    
    if(!token) {
        console.log("there is no token.");
        return res.status(401).send({message: "Unauthorized access."});
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err) {
            console.log("Token has some trabble ", decoded);
            return res.status(401).send({message: "Unauthorized access."});
        }

        req.user = decoded;
        next();
    });
}

module.exports = verifyToken;