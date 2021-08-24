var mysql = require("mysql");

// Buat Koneksi Database
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_test_bitungkota",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("MySQL terkoneksi");
});

module.exports = conn;
