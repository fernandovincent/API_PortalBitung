"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data lppd
exports.tampilSemuaLppd = function (req, res) {
  connection.query("SELECT * FROM lppd", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data lppd berdasarkan id
exports.tampilLppdBerdasarkanID = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM lppd WHERE id_lppd = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data lppd
exports.tambahLppd = function (req, res) {
  var id_lppd = req.body.id_lppd;
  var tahun_lppd = req.body.tahun_lppd;
  var lppd = req.body.lppd;
  var tgl_upload = req.body.tgl_upload;

  connection.query("INSERT INTO lppd (id_lppd, tahun_lppd, lppd, tgl_upload) VALUES (?, ?, ?, ?)", [id_lppd, tahun_lppd, lppd, tgl_upload], function (errorows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Kembalikan Data!", res);
    }
  });
};

// Merubah data berdasarkan id lppd
exports.ubahLppd = function (req, res) {
  var id_lppd = req.body.id_lppd;
  var tahun_lppd = req.body.tahun_lppd;
  var lppd = req.body.lppd;
  var tgl_upload = req.body.tgl_upload;

  connection.query("UPDATE lppd SET tahun_lppd=?, lppd=?, tgl_upload=? WHERE id_lppd=?", [tahun_lppd, lppd, tgl_upload, id_lppd], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Ubah Data", res);
    }
  });
};

// Menghapus data berdasarkan id lppd
exports.hapusLppd = function (req, res) {
  var id_lppd = req.body.id_lppd;
  connection.query("DELETE FROM lppd WHERE id_lppd=?", [id_lppd], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Hapus Data", res);
    }
  });
};
