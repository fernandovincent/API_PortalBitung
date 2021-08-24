"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data lakip
exports.tampilSemuaLakip = function (req, res) {
  connection.query("SELECT * FROM lakip", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data lakip berdasarkan id
exports.tampilLakipBerdasarkanID = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM lakip WHERE id_lakip = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data lakip
exports.tambahLakip = function (req, res) {
  var id_lakip = req.body.id_lakip;
  var lakip = req.body.lakip;
  var tgl_upload = req.body.tgl_upload;

  connection.query("INSERT INTO lakip (id_lakip, lakip, tgl_upload) VALUES (?, ?, ?)", [id_lakip, lakip, tgl_upload], function (errorows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Kembalikan Data!", res);
    }
  });
};

// Merubah data berdasarkan id lakip
exports.ubahLakip = function (req, res) {
  var id_lakip = req.body.id_lakip;
  var lakip = req.body.lakip;
  var tgl_upload = req.body.tgl_upload;

  connection.query("UPDATE lakip SET lakip=? tgl_upload=? WHERE id_lakip=?", [lakip, tgl_upload, id_lakip], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Ubah Data", res);
    }
  });
};

// Menghapus data berdasarkan id lakip
exports.hapusLakip = function (req, res) {
  var id_lakip = req.body.id_lakip;
  connection.query("DELETE FROM lakip WHERE id_lakip=?", [id_lakip], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Hapus Data", res);
    }
  });
};
