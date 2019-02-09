const express = require("express");
const router = express.Router();
const burgers = require("../models/burgers.js");

router.get("/", function(req, res){
    burgers.all(function(data){
        const hdObj = {
            burgers: data
        }
        console.log(hdObj);
        res.render("index", hdObj);
    })
});

router.post("/api/burgers", function(req, res){
    burgers.create(
        [req.body.burger_name], 
        function(result){
        console.log(result);
        res.json({id: result.insertId});
    })
});

module.exports = router;