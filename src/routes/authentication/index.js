
const {createCookieToken, logout} = require('../../api/authentication/controllers/createCookieToken');

const router = require('express').Router();

router.post("/jwt", createCookieToken);

router.post("/logout", logout);

module.exports = router;