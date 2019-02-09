const connection = require("../config/connection.js");

const orm = {
    all: function(table, cb){
        let query = "SELECT * FROM ??";
        connection.query(query, [table], function(err, res){
            if (err) throw err;
            cb(res);
        })
    },

    insert: function(table, col, val, cb){
        let query = "INSERT INTO ?? (??) VALUES (??)";
        connection.query(query, [table, col, val], function(err, res){
            if (err) throw err;
            cb(res);
        })
    },
    
    update: function(table, col, val1, id, cb){
        let query = "UPDATE ?? SET ?? = ?? WHERE ?? = ?";
        connection.query(query, [table, col, val1, id], function(err, res){
            if (err) throw err;
            cb(res);
        })
    },

    delete: function(table, id, cb){
        let query = "DELETE FROM ?? WHERE ?? = ?";
        connection.query(query, [table, id], function(err, res){
            if (err) throw err;
            cb(res);
        })
    }
}

module.exports = orm;