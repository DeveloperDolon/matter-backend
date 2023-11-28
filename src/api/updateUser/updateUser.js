const checkingJWT = require("../../utils/checkingJWT");
const userModal = require("../../models/user");

const updateUser = async (req, res, next) => {
    try {

        const isValid = checkingJWT(req.user.user, req.query.email);
        if(!isValid) {
            return res.status(401).send({message: "forbidden access"});
        }

        const update = {role: req.body.role};
        const id = req.body.id;
        const result = await userModal.findByIdAndUpdate(id, update);

        res.send(result);

    } catch (err) {
        next(err);
    }
}

module.exports = updateUser;