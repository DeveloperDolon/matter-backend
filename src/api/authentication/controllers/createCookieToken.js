const jwt = require("jsonwebtoken");
require('dotenv').config();

const createCookieToken = async (req, res, next) => {

    try {
        const user = req.body;
        console.log("user for token ",user);

        const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "6h"})

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none"
        })
        .send({success: true});
    } catch(err) {
        next(err);
    }
}

const logout = async (req, res, next) => {
    try {
        const user = req.body;
        console.log("logged out", user);
        res.clearCookie("token", {maxAge: 0}).send({cleared: true});
    } catch(err) {
        next(err);
    } 
}

module.exports = {createCookieToken, logout};