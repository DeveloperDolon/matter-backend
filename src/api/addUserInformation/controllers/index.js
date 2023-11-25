
const userSchema = require("../../../models/user");

const isExist = async (email) => {
    const query = {email : email};
    const result = await userSchema.findOne(query);
    
    return result;
}

module.exports = isExist;