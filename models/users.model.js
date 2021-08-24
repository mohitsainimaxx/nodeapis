const sql = require("./db.js");
// constructor
const users = function(user) {
  this.email = user.email;
  this.name = user.name;
  this.active = user.active;
};
users.getAll = result => {
  sql.query("SELECT * FROM kites_persons", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("kites_person: ", res);
    result(null, res);
  });
};
users.findById = (email, result) => {
  sql.query(`SELECT * FROM kites_users WHERE email = ${email}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found customer: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

module.exports = users;