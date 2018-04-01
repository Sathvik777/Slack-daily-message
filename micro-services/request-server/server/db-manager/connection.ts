import * as mysql from 'mysql';

const connection = mysql.createConnection({
    host: "host",
    user: "",
    password: ""
  });

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

 module.exports = connection;