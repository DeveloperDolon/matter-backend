const checkingJWT = require("../../utils/checkingJWT");
const userModal = require("../../models/user");

const getAllUsers = async (req, res, next) => {
    try {

        const isValid = checkingJWT(req.user.user, req.query.email);
        if(!isValid) {
            return res.status(401).send({message: "Forbidden access."});
        }
        
        const result = await userModal.find({email: { $ne: req.query.email }});

        res.send(result);

    } catch (err) {
        next(err);
    }
}

module.exports = getAllUsers;