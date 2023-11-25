
const userModal = require('../../models/user');
const isExist = require('./controllers');


const addUserInfo = async (req, res, next) => {
    try {

        const userInfo = req.body;

        const preExist = await isExist(req.body.email);

        if(preExist) {
            return res.send({message: "User already exists!"})
        }

        const result = await userModal.insertMany(userInfo);

        res.send(result);

    } catch (err) {
        next(err);
    }
}

module.exports = addUserInfo;