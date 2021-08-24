"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data foto
exports.tampilSemuaFoto = function (req, res) {
  connection.query("SELECT * FROM foto", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data foto berdasarkan id
exports.tampilFotoBerdasarkanID = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM foto WHERE id_foto = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data foto
exports.tambahFoto = function (req, res) {
  var id_foto = req.body.id_foto;
  var nama_foto = req.body.nama_foto;
  var foto = req.body.foto;

  connection.query("INSERT INTO foto (id_foto, nama_foto, foto) VALUES (?, ?, ?)", [id_foto, nama_foto, foto], function (errorows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Kembalikan Data!", res);
    }
  });
};

// Merubah data berdasarkan id foto
exports.ubahFoto = function (req, res) {
  var id_foto = req.body.id_foto;
  var nama_foto = req.body.nama_foto;
  var foto = req.body.foto;

  connection.query("UPDATE foto SET nama_foto=?, foto=? WHERE id_foto=?", [nama_foto, foto, id_foto], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Ubah Data", res);
    }
  });
};

// Menghapus data berdasarkan id foto
exports.hapusFoto = function (req, res) {
  var id_foto = req.body.id_foto;
  connection.query("DELETE FROM daftar_walikota WHERE id_foto=?", [id_foto], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Hapus Data", res);
    }
  });
};
