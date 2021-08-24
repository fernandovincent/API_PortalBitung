"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data rpjmd
exports.tampilSemuaRpjmd = function (req, res) {
  connection.query("SELECT * FROM rpjmd", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data rpjmd berdasarkan id
exports.tampilRpjmdBerdasarkanID = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM rpjmd WHERE id_rpjmd = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data rpjmd
exports.tambahRpjmd = function (req, res) {
  var id_rpjmd = req.body.id_rpjmd;
  var rpjmd = req.body.rpjmd;
  var tgl_upload = req.body.tgl_upload;

  connection.query("INSERT INTO rpjmd (id_rpjmd, rpjmd, tgl_upload) VALUES (?, ?, ?)", [id_rpjmd, rpjmd, tgl_upload], function (errorows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Kembalikan Data!", res);
    }
  });
};

// Merubah data berdasarkan id rpjmd
exports.ubahRpjmd = function (req, res) {
  var id_rpjmd = req.body.id_rpjmd;
  var rpjmd = req.body.rpjmd;
  var tgl_upload = req.body.tgl_upload;

  connection.query("UPDATE rpjmd SET rpjmd=?, tgl_upload=? WHERE id_rpjmd=?", [rpjmd, tgl_upload, id_rpjmd], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Ubah Data", res);
    }
  });
};

// Menghapus data berdasarkan id rpjmd
exports.hapusRpjmd = function (req, res) {
  var id_rpjmd = req.body.id_rpjmd;
  connection.query("DELETE FROM rpjmd WHERE id_rpjmd=?", [id_rkpd], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Hapus Data", res);
    }
  });
};
