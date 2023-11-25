
const userModel = require('../../models/user');

const getUser = async (req, res, next) => {
    try {   

        if(req.user.user !== req.query.email) {
            return res.status(403).send({message: "Forbidden access."})
        }

        const query = {email : req.query.email};

        const result = await userModel.findOne(query);

        res.send(result);

    } catch(err) {
        next(err);
    }
}

module.exports = getUser;