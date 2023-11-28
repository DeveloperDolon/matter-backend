const checkingJWT = require("../../utils/checkingJWT");
const userModal = require("../../models/user");


const deleteUser = async (req, res, next) => {
    try {
        const isValid = checkingJWT(req.user.user, req.query.email);
        if(!isValid) {
            return res.status(401).send({message: "Forbidden access."});
        }


        const id = req.params.id;
        console.log(id);
        const result = await userModal.findByIdAndDelete(id);

        res.send(result);


    } catch (err) {
        next(err);
    }
}

module.exports = deleteUser;