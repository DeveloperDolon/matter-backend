require('dotenv').config();
const express = require('express');
const app = express();
const applyMiddleware = require('./middlewares/applyMiddleware');
const connectDB = require('./db/connectDB');
const port = process.env.PORT || 5000;
const authenticationRouter = require("./routes/authentication/index");

applyMiddleware(app);



app.use(authenticationRouter);



app.get('/health', (req, res) =>{
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

main();
