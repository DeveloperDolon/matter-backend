
const {Schema, model, default: mongoose} = require("mongoose");

const WishlistSchema = new Schema({
    "property_id": {
        type: String, 
        required: true
    },
    "property_image": {
        type: String,
        required: true
    },"property_title": {
        type: String,
        required: true
    },"property_location": {
        type: String,
        required: true
    },"agent_email": {
        type: String,
        required: true
    },
    "agent_name": {
        type: String,
        required: true
    },"agent_image" : {
        type: String,
        required: true
    }, "price_range" : {
        type: String,
        required: true
    },"verified": {
        type: Boolean,
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
    "buying_date": {
        type: Date,
        default: new Date()
    }
});

const WishlistModel = model("userWishlist", WishlistSchema);

module.exports = WishlistModel;