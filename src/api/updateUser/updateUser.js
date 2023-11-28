const checkingJWT = require("../../utils/checkingJWT");
const userModal = require("../../models/user");
const propertyModel = require("../../models/property");

const updateUser = async (req, res, next) => {
    try {

        const isValid = checkingJWT(req.user.user, req.query.email);
        if(!isValid) {
            return res.status(401).send({message: "forbidden access"});
        }

        if(req.body.role === "fraud") {
            const query = {agent_email: req.body?.fraudEmail};

            const changePropertyStatus = await propertyModel.updateMany(query, {$set: {verified: "unknown"} })

            console.log(changePropertyStatus);
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