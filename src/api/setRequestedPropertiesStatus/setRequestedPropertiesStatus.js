const checkingJWT = require("../../utils/checkingJWT");
const propertyBoughtModel = require("../../models/propertyBoughtModel");


const setRequestedPropertiesStatus = async (req, res, next) => {
    try {
        const isValid = checkingJWT(req.user.user, req.query.email);
        
        if(!isValid) {
            return res.status(401).send({message: "Forbidden access."});
        }
        const id = req.params.id;
        const updatedDoc = {status: req.body.status};

        if(req.body.status === "accepted") {
            console.log("In accepted")
            const filter = { _id: { $ne: id }, property_id: req.body.property_id };
            const update = { $set: { status: 'rejected' } };
            console.log("In a deep")
            const updateAnother = await propertyBoughtModel.updateMany(filter, update);
            console.log(updateAnother);
        }

        const result = await propertyBoughtModel.findByIdAndUpdate(id, updatedDoc);

        res.send(result);

    } catch (err) {
        next(err);
    }
}

module.exports = setRequestedPropertiesStatus;