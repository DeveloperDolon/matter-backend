require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


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

app.listen(port, () => {
    console.log("Agency is listening " + port);
})