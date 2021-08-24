"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data rkpd
exports.tampilSemuaRkpd = function (req, res) {
  connection.query("SELECT * FROM rkpd", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data rkpd berdasarkan id
exports.tampilRkpdBerdasarkanID = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM rkpd WHERE id_rkpd = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data rkpd
exports.tambahRkpd = function (req, res) {
  var id_rkpd = req.body.id_rkpd;
  var tahun_rkpd = req.body.tahun_rkpd;
  var rkpd = req.body.rkpd;
  var tgl_upload = req.body.tgl_upload;

  connection.query("INSERT INTO rkpd (id_rkpd, tahun_rkpd, rkpd, tgl_upload) VALUES (?, ?, ?, ?)", [id_rkpd, tahun_rkpd, rkpd, tgl_upload], function (errorows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Kembalikan Data!", res);
    }
  });
};

// Merubah data berdasarkan id rkpd
exports.ubahRkpd = function (req, res) {
  var id_rkpd = req.body.id_rkpd;
  var tahun_rkpd = req.body.tahun_rkpd;
  var rkpd = req.body.rkpd;
  var tgl_upload = req.body.tgl_upload;

  connection.query("UPDATE rkpd SET tahun_rkpd=?, rkpd=?, tgl_upload=? WHERE id_rkpd=?", [tahun_rkpd, rkpd, tgl_upload, id_rkpd], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Ubah Data", res);
    }
  });
};

// Menghapus data berdasarkan id rkpd
exports.hapusRkpd = function (req, res) {
  var id_rkpd = req.body.id_rkpd;
  connection.query("DELETE FROM rkpd WHERE id_rkpd=?", [id_rkpd], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Hapus Data", res);
    }
  });
};
