const checkingJWT = require("../../utils/checkingJWT");
const propertyModel = require("../../models/property");


const deleteAgentProperty = async (req, res , next) => {
    try {

        const isValid = checkingJWT(req.user.user, req.query.email);
        if(!isValid) {
            return res.status(401).send({message: "Forbidden access."});
        }

        const id = req.params.id;

        const result = await propertyModel.findByIdAndDelete(id);

        res.send(result);

    } catch (err) {
        next(err);
    }
}

module.exports = deleteAgentProperty;