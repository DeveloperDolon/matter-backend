
const {Schema, model, default: mongoose} = require("mongoose");

const PropertySchema = new Schema({
    "property_title": {
        type: String,
        required: true,
    },
    "property_location": {
        type: String,
        required: true,
    },
    "property_images": {
        type: Array,
        required: true,
    },
    "agent_name": {
        type: String,
        required: true,
    },
    "agent_email": {
        type: String,
        required: true,
    },
    "agent_image" : {
        type: String,
        required: true,
    },
    "price_range": {
        type: String,
        required: true,
    },
    "overview": {
        type: [
            {
                "bed_room": {
                    type: String,
                    required: true,
                },
                "bath_room": {
                    type: String,
                    required: true,
                },
                "garage" : {
                    type: String,
                    required: true,                
                },
                "area" : {
                    type: String,
                    required: true,
                },
                "lot_size" : {
                    type: String,
                    required: true,
                }
            }
        ],
        required: true,
    },
    "verified": {
        type: String,
        default: "unknown",
    }


});

const propertyModel = model("propertyCollection", PropertySchema);

module.exports = propertyModel;