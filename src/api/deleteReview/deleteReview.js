
const propertyReviewModel = require("../../models/propertyReviewModel");
const checkingJWT = require("../../utils/checkingJWT");

const deleteReview = async (req, res, next) => {
    try {
        
        const isValid = checkingJWT(req.user.user, req.query.email);
        
        if(!isValid) { 
            return res.status(401).send({message: "Forbidden access!"});
        }

        const id = req.params.id;
        
        const result = await propertyReviewModel.findByIdAndDelete(id);

        res.send(result);

    } catch(err) {
        next(err);
    }
}

module.exports = deleteReview;