//Dependencies
var connection = require('./connect.js');

var orm = {
    //Function to query all burgers in table
    selectAll: function(cb) {
        var dbQuery = "SELECT * FROM burgers";
        connection.query(dbQuery, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    //Function to insert a new entry into the table
    insertOne: function(burger, cb) {
        var dbQuery = "INSERT INTO burgers (burger_name) VALUES (?)";

        connection.query(dbQuery, [burger], function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    //Function to update the burger to devoured flag when the devoured button is pressed.
    updateOne: function(id, cb) {
        var dbQuery = "UPDATE burgers SET devoured = true WHERE id = (?) ";

        connection.query(dbQuery, [id],function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
        
    },

    //Function to delete an entry from the table
    deleteOne: function(id, cb) {
        var dbQuery = "DELETE FROM burgers WHERE id =(?)";

        console.log(dbQuery);
        connection.query(dbQuery, [id], function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
};


module.exports = orm;