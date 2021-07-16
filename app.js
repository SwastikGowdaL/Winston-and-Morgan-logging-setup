const express = require("express");
const logger = require("./logger");
const fs = require("fs");
require("dotenv").config();
const config = require('config');
const path = require('path');
const morgan = require('morgan');


const app = express();
app.use(express.json());

//configuring morgan and writing the logs in access.log file
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {
    flags: 'a'
});
app.use(morgan("short", {
    stream: accessLogStream
}));


//using logger
logger.error("text error", {
    japan: "awesome",
});
logger.info("text info", {
    india: "sucks",
});
logger.warn("text warn");
logger.debug("text debug");
logger.error(new Error("something went wrong"));

console.log("mode -", process.env.NODE_ENV);

app.post("/", (req, res) => {

    try {

        let logs = fs.readFileSync("logs.json", "utf8");
        res.status(200).send({
            logs,
        });

    } catch (err) {
        console.log(err);
    }

});

module.exports = app;