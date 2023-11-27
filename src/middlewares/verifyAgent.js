    const userModal = require('../models/user');

    const verifyAgent = async (req, res, next) => {
        const email = req.user.user;

        const query = {email: email};

        const user = await userModal.findOne(query);
        const isAgent = user?.role === "agent";

        if (!isAgent) {
            return res.status(403).send({message: "Unauthorized access."});
        }

        next();
    }

    module.exports = verifyAgent;