"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data lambang
exports.tampilSemuaLambang = function (req, res) {
  connection.query("SELECT * FROM lambang", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data lambang berdasarkan id
exports.tampilLambangBerdasarkanID = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM lambang WHERE id_lambang = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data lambang
exports.tambahLambang = function (req, res) {
  var id_lambang = req.body.id_lambang;
  var deskripsi = req.body.deskripsi;
  var foto_lambang = req.body.foto_lambang;

  connection.query("INSERT INTO lambang (id_lambang, deskripsi, foto_lambang) VALUES (?, ?, ?)", [id_lambang, deskripsi, foto_lambang], function (errorows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Kembalikan Data!", res);
    }
  });
};

// Merubah data berdasarkan id lambang
exports.ubahLambang = function (req, res) {
  var id_lambang = req.body.id_lambang;
  var deskripsi = req.body.deskripsi;
  var foto_lambang = req.body.foto_lambang;

  connection.query("UPDATE lambang SET deskripsi=?, foto_lambang=? WHERE id_lambang=?", [deskripsi, foto_lambang, id_lambang], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Ubah Data", res);
    }
  });
};

// Menghapus data berdasarkan id lambang
exports.hapusLambang = function (req, res) {
  var id_lambang = req.body.id_lambang;
  connection.query("DELETE FROM lambang WHERE id_lambang=?", [id_lambang], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Hapus Data", res);
    }
  });
};
