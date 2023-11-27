

const {Schema, model, default: mongoose} = require("mongoose");

const UserReviewSchema = new Schema({
    "property_title": {
        type: String,
        required: true
    },
    "property_agent": {
        type: String,
        required: true
    },
    "review_date": {
        type: String,
        required: true
    },
    "review_description": {
        type: String,
        required: true
    }
})

const userReviewModel = model("propertyreviews", UserReviewSchema);

module.exports = userReviewModel;