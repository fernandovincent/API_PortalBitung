"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data potensi
exports.tampilSemuaPotensi = function (req, res) {
  connection.query("SELECT * FROM potensi", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data potensi berdasarkan id
exports.tampilPotensiBerdasarkanID = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM potensi WHERE id_potensi = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data potensi
exports.tambahPotensi = function (req, res) {
  var id_potensi = req.body.id_potensi;
  var nama_potensi = req.body.nama_potensi;
  var alamat_potensi = req.body.alamat_potensi;
  var deskripsi_potensi = req.body.deskripsi_potensi;
  var gambar_potensi = req.body.gambar_potensi;

  connection.query("INSERT INTO potensi (id_potensi, nama_potensi, alamat_potensi, deskripsi_potensi, gambar_potensi) VALUES (?, ?, ?, ?, ?)", [id_potensi, nama_potensi, alamat_potensi, deskripsi_potensi, gambar_potensi], function (errorows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Kembalikan Data!", res);
    }
  });
};

// Merubah data berdasarkan id potensi
exports.ubahPotensi = function (req, res) {
  var id_potensi = req.body.id_potensi;
  var nama_potensi = req.body.nama_potensi;
  var alamat_potensi = req.body.alamat_potensi;
  var deskripsi_potensi = req.body.deskripsi_potensi;
  var gambar_potensi = req.body.gambar_potensi;

  connection.query("UPDATE potensi SET nama_potensi=?, alamat_potensi=?, deskripsi_potensi=?, gambar_potensi=? WHERE id_potensi=?", [nama_potensi, alamat_potensi, deskripsi_potensi, gambar_potensi, id_potensi], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Ubah Data", res);
    }
  });
};

// Menghapus data berdasarkan id potensi
exports.hapusPotensi = function (req, res) {
  var id_potensi = req.body.id_potensi;
  connection.query("DELETE FROM potensi WHERE id_potensi=?", [id_potensi], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Hapus Data", res);
    }
  });
};
