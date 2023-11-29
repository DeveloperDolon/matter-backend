const checkingJWT = require("../../utils/checkingJWT");
const propertyModel = require("../../models/property");


const setAdvertisedProperty = async (req, res, next) => {
    try {

        const isValid = checkingJWT(req.user.user, req.query.email);
        if(!isValid) {
            return res.status(401).send({message: "forbidden access"});
        }

        const howManyAdvertised = await propertyModel.find({advisor_email: req.query.email});

        if( req.body.advertisement &&  howManyAdvertised?.length > 5) {
            return res.send({limitOver: true, message: "Your advertise limit is over"});
        }

        const id = req.params.id;
        const update = {advertised: req.body.advertisement, advisor_email: req.body.advertisement ? req.query.email : "none"};
        const result = await propertyModel.findByIdAndUpdate(id, update);

        res.send(result);

    } catch (err) {
        next(err);
    }
}

module.exports = setAdvertisedProperty;