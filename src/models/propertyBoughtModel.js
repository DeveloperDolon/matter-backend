
const {Schema, model, default: mongoose} = require("mongoose");

const PropertyBoughtSchema = new Schema({
    "property_id": {
        type: String,
        required: true
    },
    "wishlist_id": {
        type: String,
        required: true
    },
    "property_title": {
        type: String,
        required: true
    },
    "property_location": {
        type: String,
        required: true
    },
    "agent_name": {
        type: String,
        required: true
    },
    "agent_email": {
        type: String,
        required: true
    },
    "buyer_email": {
        type: String,
        required: true
    },
    "buyer_name": {
        type: String,
        required: true
    },
    "buying_data": {
        type: Date,
        required: true
    },
    "offered_price": {
        type: Number,
        required: true
    }
});

const propertyBoughtModel = model("usersBoughtProperty", PropertyBoughtSchema);

module.exports = propertyBoughtModel;