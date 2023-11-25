const {Schema, model, default: mongoose} = require("mongoose");

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    image: String,
    role: {
        type: String,
        required: true,
    },

});

const userModal = mongoose.model("users", UserSchema);

module.exports = userModal;