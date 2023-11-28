

const userModal = require('../models/user');

const verifyAdmin = async (req, res, next) => {
    const email = req.user.user;

    const query = {email: email};

    const user = await userModal.findOne(query);
    const isAgent = user?.role === "admin";

    if (!isAgent) {
        return res.status(403).send({message: "Unauthorized access."});
    }

    next();
}

module.exports = verifyAdmin;