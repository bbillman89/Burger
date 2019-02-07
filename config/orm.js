const connection = require("../config/connection.js");

const orm = {
    selectAll: function(table, cb){
        let query = "WHERE * FROM ??";
        connection.query(query, [table], function(err, res){
            if (err) throw err;
            cb(res);
        })
    },

    insertOne: function(table, col, val, cb){
        let query = "INSERT INTO ?? (??) VALUES (??)";
        connection.query(query, [table, col, val], function(err, res){
            if (err) throw err;
            cb(res);
        })
    },

    updateOne: function(){

    }
}

module.exports = orm;