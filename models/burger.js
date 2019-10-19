// IMPORT ORM to create functions using the ORM which will interact with our db

var orm = require("../config/orm.js")

var burger = {
    all: function(cb) {
        // reason we have a call back here is because we specified cb in our orm
        orm.selectall("burgers", function(res){
            cb(res);
        });
    },

    create: function(cols,vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },

    update: function(objColVals, condition, cb){
        orm.updateOne("burgers", objColVals, condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger
// Export the db and function for the controller (burger_controller.js)