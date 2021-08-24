"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data rpjpd
exports.tampilSemuaRpjpd = function (req, res) {
  connection.query("SELECT * FROM rpjpd", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data rpjpd berdasarkan id
exports.tampilRpjpdBerdasarkanID = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM rpjpd WHERE id_rpjpd = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data rpjpd
exports.tambahRpjpd = function (req, res) {
  var id_rpjpd = req.body.id_rpjpd;
  var rpjpd = req.body.rpjpd;
  var tgl_upload = req.body.tgl_upload;

  connection.query("INSERT INTO rpjpd (id_rpjpd, rpjpd, tgl_upload) VALUES (?, ?, ?)", [id_rpjpd, rpjpd, tgl_upload], function (errorows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Kembalikan Data!", res);
    }
  });
};

// Merubah data berdasarkan id rpjpd
exports.ubahRpjpd = function (req, res) {
  var id_rpjpd = req.body.id_rpjpd;
  var rpjpd = req.body.rpjpd;
  var tgl_upload = req.body.tgl_upload;

  connection.query("UPDATE rpjpd SET rpjpd=?, tgl_upload=? WHERE id_rpjpd=?", [rpjpd, tgl_upload, id_rpjpd], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Ubah Data", res);
    }
  });
};

// Menghapus data berdasarkan id rpjpd
exports.hapusRpjpd = function (req, res) {
  var id_rpjpd = req.body.id_rpjpd;
  connection.query("DELETE FROM rpjpd WHERE id_rpjpd=?", [id_rpjpd], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Hapus Data", res);
    }
  });
};
