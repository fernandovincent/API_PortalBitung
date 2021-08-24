"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data file pengumuman
exports.tampilSemuaFilePengumuman = function (req, res) {
  connection.query("SELECT * FROM file_pengumuman", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data file pengumuman berdasarkan id
exports.tampilFilePengumumanBerdasarkanID = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM file_pengumuman WHERE id_file_pengumuman = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data file pengumuman
exports.tambahFilePengumuman = function (req, res) {
  var id_file_pengumuman = req.body.id_file_pengumuman;
  var nama_file = req.body.nama_file;
  var file_pengumuman = req.body.file_pengumuman;
  var id_pengumuman = req.body.id_pengumuman;

  connection.query("INSERT INTO file_pengumuman (id_file_pengumuman, nama_file, file_pengumuman, id_pengumuman) VALUES (?, ?, ?, ?)", [id_file_pengumuman, nama_file, file_pengumuman, id_pengumuman], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Kembalikan Data!", res);
    }
  });
};

// Merubah data berdasarkan id file pengumuman
exports.ubahFilePengumuman = function (req, res) {
  var id_file_pengumuman = req.body.id_file_pengumuman;
  var nama_file = req.body.nama_file;
  var file_pengumuman = req.body.file_pengumuman;
  var id_pengumuman = req.body.id_pengumuman;

  connection.query("UPDATE file_pengumuman SET nama_file=?, file_pengumuman=?, id_pengumuman=? WHERE id_file_pengumuman=?", [nama_file, file_pengumuman, id_pengumuman, id_file_pengumuman], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Ubah Data", res);
    }
  });
};

// Menghapus data berdasarkan id file pengumuman
exports.hapusFilePengumuman = function (req, res) {
  var id_file_pengumuman = req.body.id_file_pengumuman;
  connection.query("DELETE FROM daftar_walikota WHERE id_file_pengumuman=?", [id_file_pengumuman], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Hapus Data", res);
    }
  });
};
