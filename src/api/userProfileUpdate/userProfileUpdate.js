const checkingJWT = require("../../utils/checkingJWT");
const userModel = require("../../models/user");

const userProfileUpdate = async (req, res, next) => {
    try {

        const isValid = checkingJWT(req.user.user, req.query.email);
        if(!isValid) {
            return res.status(401).send({message: "forbidden access"});
        }

        const id = req.params.id;

        const update = {name: req.body.name, image: req.body.image};

        const result = await userModel.findByIdAndUpdate(id, update);

        res.send(result);

    } catch (err) {
        next(err);
    }
}

module.exports = userProfileUpdate;