"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data pengumuman
exports.tampilSemuaPengumuman = function (req, res) {
  connection.query("SELECT * FROM pengumuman", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data pengumuman berdasarkan id
exports.tampilPengumumanBerdasarkanID = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM pengumuman WHERE id_pengumuman = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data pengumuman
exports.tambahPengumuman = function (req, res) {
  var id_pengumuman = req.body.id_pengumuman;
  var judul_pengumuman = req.body.judul_pengumuman;
  var isi_pengumuman = req.body.isi_pengumuman;
  var cover_pengumuman = req.body.cover_pengumuman;
  var tgl_pengumuman = req.body.tgl_pengumuman;

  connection.query("INSERT INTO pengumuman (id_pengumuman, judul_pengumuman, isi_pengumuman, cover_pengumuman, tgl_pengumuman) VALUES (?, ?, ?, ?, ?)", [id_pengumuman, judul_pengumuman, isi_pengumuman, cover_pengumuman, tgl_pengumuman], function (errorows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Kembalikan Data!", res);
    }
  });
};

// Merubah data berdasarkan id pengumuman
exports.ubahPengumuman = function (req, res) {
    var id_pengumuman = req.body.id_pengumuman;
    var judul_pengumuman = req.body.judul_pengumuman;
    var isi_pengumuman = req.body.isi_pengumuman;
    var cover_pengumuman = req.body.cover_pengumuman;
    var tgl_pengumuman = req.body.tgl_pengumuman;

  connection.query("UPDATE pengumuman SET judul_pengumuman=?, isi_pengumuman=?, cover_pengumuman=?, tgl_pengumuman=? WHERE id_pengumuman=?", [judul_pengumuman, isi_pengumuman, cover_pengumuman, tgl_pengumuman, id_pengumuman], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Ubah Data", res);
    }
  });
};

// Menghapus data berdasarkan id pengumuman
exports.hapusPengumuman = function (req, res) {
  var id_pengumuman = req.body.id_pengumuman;
  connection.query("DELETE FROM pengumuman WHERE id_pengumuman=?", [id_pengumuman], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Hapus Data", res);
    }
  });
};
