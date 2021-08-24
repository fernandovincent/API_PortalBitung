"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data geografi
exports.tampilSemuaGeografi = function (req, res) {
  connection.query("SELECT * FROM geografi", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data geografi berdasarkan id
exports.tampilGeografiBerdasarkanID = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM geografi WHERE id_geografi = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data geografi
exports.tambahGeografi = function (req, res) {
  var id_geografi = req.body.id_geografi;
  var geografi = req.body.geografi;
  var tgl_upload = req.body.tgl_upload;

  connection.query("INSERT INTO geografi (id_geografi, geografi, tgl_upload) VALUES (?, ?, ?)", [id_geografi, geografi, tgl_upload], function (errorows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Kembalikan Data!", res);
    }
  });
};

// Merubah data berdasarkan id geografi
exports.ubahGeografi = function (req, res) {
  var id_geografi = req.body.id_geografi;
  var geografi = req.body.geografi;
  var tgl_upload = req.body.tgl_upload;

  connection.query("UPDATE geografi SET geografi=?, tgl_upload=? WHERE id_geografi=?", [geografi, tgl_upload, id_geografi], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Ubah Data", res);
    }
  });
};

// Menghapus data berdasarkan id geografi
exports.hapusGeografi = function (req, res) {
  var id_geografi = req.body.id_geografi;
  connection.query("DELETE FROM geografi WHERE id_geografi=?", [id_geografi], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Hapus Data", res);
    }
  });
};
