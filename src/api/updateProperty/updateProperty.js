const checkingJWT = require("../../utils/checkingJWT");
const propertyModel = require("../../models/property");

const updateProperty = async (req, res, next) => {
    try {
        
        const isValid = checkingJWT(req.user.user, req.query.email);
        if(!isValid) {
            console.log(":a;lsdkfj")
            return res.status(401).send({message: "Forbidden access."});
        }
        const data = req.body;
        const id = req.params.id;
        const update = {
            property_title: data?.property_title,
            property_location: data?.property_location,
            property_images: data?.property_images,
            agent_name: data?.agent_name,
            agent_email: data?.agent_email,
            agent_image: data?.agent_image,
            price_range: data?.price_range,
            overview: data?.overview
        }
        
        const result = await propertyModel.findByIdAndUpdate(id, update);
        res.send(result);
    } catch (err) {
        next(err);
    }
}

module.exports = updateProperty;