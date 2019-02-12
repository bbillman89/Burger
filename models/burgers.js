let orm = require("../config/orm");

let Burger = {
    all: function(cb){
        orm.all("burgers", function(res) {
            cb(res);
            console.log(res);
        });
    },
    
    create: function(col, val, cb){
        orm.create("burgers", col, val, function(res) {
            cb(res);
            console.log(res);
        });
    },
    
    update: function(col, val1, id, cb){
        orm.update("burgers", col, val1, id, function(res){
            cb(res);
            console.log(res);
        })
    },
    /*
    delete: function(id, cb){
        orm.delete("burgers", id, function(res){
            cb(res);
            console.log(res);
        })
    }*/
}

module.exports = Burger;