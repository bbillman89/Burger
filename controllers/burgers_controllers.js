const express = require("express");
const router = express.Router();
const Burger = require("../models/burgers.js");

router.get("/", function(req, res){
    Burger.all(function(data){
        const hdObj = {
            burgers: data
        }
        console.log(hdObj);
        res.render("index", hdObj);
    })
});

router.post("/api/burgers", function(req, res){
    Burger.create([
        "burger_name"
    ], [
        req.body.burger_name
    ], function(result){
        console.log(result);
        res.json({ id: result.insertId });
    })
});

router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    Burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
        } else {
        res.status(200).end();
        }
    });
});

module.exports = router;