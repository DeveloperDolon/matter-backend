const checkingJWT = require("../../utils/checkingJWT");
const propertyModel = require("../../models/property");


const adminSetPropertyStatus = async (req, res, next) => {
    try {

        const isValid = checkingJWT(req.user.user, req.query.email);
        
        if(!isValid) {
            return res.status(401).send({message: "Forbidden access."});
        }
        const update = {verified: req.body.status};
        const id = req.params.id;
        

        const updateStatus = await propertyModel.findByIdAndUpdate(id, update);
        
        res.send(updateStatus);

    } catch(err) {
        next(err);
    }
}

module.exports = adminSetPropertyStatus;