const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bodyParser = require("body-parser");
const mysql = require('mysql2');
const config = require('../config');
const cron = require('node-cron');
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
router.use(bodyParser.json());
router.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
const pool = mysql.createPool({ host: config.mysqlHost, user: config.user, password: process.env.DB_PASS || config.password, database: config.database, port: config.mysqlPort });
const promisePool = pool.promise();



router.get('/testme' , function(req, res){
    try{
    return res.send({status: true , msg : "successfull" })
    } catch(err){

        return res.send({status: false , error : err.message})
    }
})





module.exports.routes=router