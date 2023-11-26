
const {Schema, model, default: mongoose} = require("mongoose");

const PropertyReviewSchema = new Schema({
    "property_id": {
        type: String,
        required: true
    },
    "property_title": {
        type: String,
        required: true
    },
    "property_agent": {
        type: String,
        required: true
    },
    "reviewer_email": {
        type: String,
        required: true
    },
    "reviewer_name": {
        type: String,
        required: true
    },
    "reviewer_image": {
        type: String,
        required: true
    },
    "review_date": {
        type: Date,
        default: Date.now()
    },
    "review_description": {
        type: String,
        required: true
    },
    "review_star": {
        type: Number,
        required: true
    }
});

const propertyReviewModel = model("propertyReview", PropertyReviewSchema);

module.exports = propertyReviewModel;

