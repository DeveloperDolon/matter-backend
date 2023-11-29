const checkingJWT = require("../../utils/checkingJWT");
const propertyBoughtModel = require("../../models/propertyBoughtModel");


const getSoldProperties = async (req, res, next) => {
    try {   

        const isValid = checkingJWT(req.user.user, req.query.email);

        if(!isValid) {
            return res.status(401).send({message: "Forbidden access."});
        }

        const revenue = await propertyBoughtModel.aggregate([
            {
                $match: {
                    agent_email: req.query.email,
                    status: "sold"
                }
            },
            {
                $group: {
                    _id: null,
                    totalSoldAmount: { $sum: "$offered_price" } // Assuming the field name is "amount"
                }
            }
        ])

        const totalSoldAmount = revenue.length > 0 ? revenue[0].totalSoldAmount : 0;

        const query = { agent_email: req.query.email, status: "sold"};

        const result = await propertyBoughtModel.find(query);

        res.send({soldProperties: result, totalSoldAmount: totalSoldAmount});

    } catch (err) {
        next(err);
    }
}

module.exports = getSoldProperties;