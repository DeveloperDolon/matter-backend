
const {Schema, model, default: mongoose} = require("mongoose");

const WishlistSchema = new Schema({
    "property_id": {
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
    "buying_date": {
        type: Date,
        default: new Date()
    }
});

const WishlistModel = model("userWishlist", WishlistSchema);

module.exports = WishlistModel;