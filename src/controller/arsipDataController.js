"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data Akun
exports.tampilSemuaArsip = function (req, res) {
  connection.query("SELECT * FROM arsip_data", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data berita berdasarkan id
exports.tampilArsipBerdasarkanID = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM arsip_data WHERE id_arsip_data = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data admin
exports.tambahArsip = function (req, res) {
  var id_arsip_data = req.body.id_arsip_data;
  var nama_arsip_data = req.body.nama_arsip_data;
  var dinas = req.body.dinas;
  var deskripsi_arsip_data = req.body.deskripsi_arsip_data;
  var arsip_data = req.body.arsip_data;
  var tgl_upload = req.body.tgl_upload;

  connection.query(
    "INSERT INTO arsip_data (id_arsip_data, nama_arsip_data, dinas, deskripsi_arsip_data, arsip_data, tgl_upload) VALUES (?, ?, ?, ?, ?, ?)",
    [id_arsip_data, nama_arsip_data, dinas, deskripsi_arsip_data, arsip_data, tgl_upload],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Kembalikan Data!", res);
      }
    }
  );
};

// Merubah data berdasarkan id admin
exports.ubahArsip = function (req, res) {
  var id_arsip_data = req.body.id_arsip_data;
  var nama_arsip_data = req.body.nama_arsip_data;
  var dinas = req.body.dinas;
  var deskripsi_arsip_data = req.body.deskripsi_arsip_data;
  var arsip_data = req.body.arsip_data;
  var tgl_upload = req.body.tgl_upload;

  connection.query(
    "UPDATE arsip_data SET nama_arsip_data=?, dinas=?, deskripsi_arsip_data=?, arsip_data=?, tgl_upload=? WHERE id_arsip_data=?",
    [nama_arsip_data, dinas, deskripsi_arsip_data, arsip_data, tgl_upload, id_arsip_data],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Ubah Data", res);
      }
    }
  );
};

// Menghapus data berdasarkan id Admin
exports.hapusArsip = function (req, res) {
  var id_arsip_data = req.body.id_arsip_data;
  connection.query("DELETE FROM admin WHERE id_arsip_data=?", [id_arsip_data], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Hapus Data", res);
    }
  });
};
