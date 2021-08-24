"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data Akun
exports.tampilSemuaAdmin = function (req, res) {
  connection.query("SELECT * FROM admin", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data berita berdasarkan id
exports.tampilAdminBerdasarkanID = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM admin WHERE id_admin = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data admin
exports.tambahAdmin = function (req, res) {
  var id_admin = req.body.id_admin;
  var nama_admin = req.body.nama_admin;
  var username = req.body.username;
  var password = req.body.password;

  connection.query("INSERT INTO admin (id_admin, nama_admin, username, password) VALUES (?, ?, ?, ?)", [id_admin, nama_admin, username, password], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Kembalikan Data!", res);
    }
  });
};

// Merubah data berdasarkan id admin
exports.ubahAdmin = function (req, res) {
  var id_admin = req.body.id_admin;
  var nama_admin = req.body.nama_admin;
  var username = req.body.username;
  var password = req.body.password;

  connection.query("UPDATE admin SET nama_admin=?, username=?, password=? WHERE id_admin=?", [nama_admin, username, password, id_admin], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Ubah Data", res);
    }
  });
};

// Menghapus data berdasarkan id Admin
exports.hapusAdmin = function (req, res) {
  var id_admin = req.body.id_admin;
  connection.query("DELETE FROM admin WHERE id_admin=?", [id_admin], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Hapus Data", res);
    }
  });
};
