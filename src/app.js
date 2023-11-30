require('dotenv').config();
const express = require('express');
const app = express();
const applyMiddleware = require('./middlewares/applyMiddleware');
const connectDB = require('./db/connectDB');
const port = process.env.PORT || 5000;

applyMiddleware(app);

const authenticationRouter = require("./routes/authentication/index");
const usersRouter = require("./routes/users/index");
const properties = require("./routes/properties/index");
const propertyReviews = require("./routes/propertyReviews/index");
const wishlist = require("./routes/wishlist/index");
const propertyBought = require("./routes/propertyBought/index");
const paymentRoutes = require("./routes/payment/index");

app.use(authenticationRouter);
app.use(usersRouter);
app.use(properties);
app.use(propertyReviews);
app.use(wishlist);
app.use(propertyBought);
app.use(paymentRoutes);


app.get('/health', (req, res) =>{
    res.send("Agency is running")
})

app.get('/', (req, res) =>{
    res.send("Agency is running")
})

app.all("*", (req, res, next) => {
    const error = new Error(`The requested url ${req.url} does not exist!`);
    error.status = 404;
    next(error);
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

const main = async () => {
    await connectDB();

    app.listen(port, () => {
        console.log("Agency is listening " + port);
    })
}

// main();
