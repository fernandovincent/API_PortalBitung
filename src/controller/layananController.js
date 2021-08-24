"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data layanan
exports.tampilSemuaLayanan = function (req, res) {
  connection.query("SELECT * FROM layanan", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data layanan berdasarkan id
exports.tampilLayananBerdasarkanID = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM layanan WHERE id_layanan = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data layanan
exports.tambahLayanan = function (req, res) {
  var id_layanan = req.body.id_layanan;
  var nama_layanan = req.body.nama_layanan;
  var dinas = req.body.dinas;
  var logo_layanan = req.body.logo_layanan;
  var deskripsi_layanan = req.body.deskripsi_layanan;
  var link = req.body.link;
  var tgl_upload = req.body.tgl_upload;

  connection.query(
    "INSERT INTO layanan (id_layanan, nama_layanan, dinas, logo_layanan, deskripsi_layanan, link, tgl_upload) VALUES (?, ?, ? ,? ,? ,? ,?)",
    [id_layanan, nama_layanan, dinas, logo_layanan, deskripsi_layanan, link, tgl_upload],
    function (errorows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Kembalikan Data!", res);
      }
    }
  );
};

// Merubah data berdasarkan id layanan
exports.ubahLayanan = function (req, res) {
  var id_layanan = req.body.id_layanan;
  var nama_layanan = req.body.layanan;
  var dinas = req.body.dinas;
  var logo_layanan = req.body.logo_layanan;
  var deskripsi_layanan = req.body.deskripsi_layanan;
  var link = req.body.link;
  var tgl_upload = req.body.tgl_upload;

  connection.query(
    "UPDATE layanan SET nama_layanan=?, dinas=?, logo_layanan=?, deskripsi_layanan=?, link=?, tgl_upload=? WHERE id_layanan=?",
    [id_layanan, nama_layanan, dinas, logo_layanan, deskripsi_layanan, link, tgl_upload],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Ubah Data", res);
      }
    }
  );
};

// Menghapus data berdasarkan id layanan
exports.hapusLayanan = function (req, res) {
  var id_layanan = req.body.id_layanan;
  connection.query("DELETE FROM layanan WHERE id_layanan=?", [id_layanan], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Hapus Data", res);
    }
  });
};
