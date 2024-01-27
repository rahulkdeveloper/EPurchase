const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = Number(process.env.PORT) || 8080;
const morgan = require('morgan');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
const sequelize = require('./db/conn');

sequelize
    .sync()
    .then((result) => {
        console.log("Database connection....");
    })
    .catch((err) => {
        console.log("err", err);
    });





const authRouter = require('./router/authentication');
const addressRouter = require('./router/address');


app.use("/api/authentication", authRouter);
app.use("/api/address", addressRouter)


app.use((err, request, response, next) => {
    console.log("err", err);
    return response.status(400).json({
        success: false,
        message: err.message
    })
})


app.listen(port, () => {
    console.log(`server is runnig on port ${port}`);
})