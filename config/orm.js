let connection = require("../config/connection.js");

/*const orm = {
    all: function(table, cb){
        let query = "SELECT * FROM ??";
        connection.query(query, [table], function(err, res){
            if (err) throw err;
            cb(res);
        })
    },

    create: function(table, col, val, cb){
        let query = "INSERT INTO ?? (??) VALUES (??)";
        connection.query(query, [table, col, val], function(err, res){
            if (err) throw err;
            cb(res);
        })
    },
    
    update: function(table, col, val1, id, cb){
        let query = "UPDATE ?? SET ?? = ?? WHERE ?? = ?";
        console.log(query);
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
}*/

/////============ TESTING ORM.JS FROM CATSAPP ===========//////

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];

    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  return arr.toString();
}
  
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};

module.exports = orm;