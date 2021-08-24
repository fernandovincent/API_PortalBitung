"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data renstra
exports.tampilSemuaRenstra = function (req, res) {
  connection.query("SELECT * FROM renstra", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data renstra berdasarkan id
exports.tampilRenstraBerdasarkanID = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM renstra WHERE id_renstra = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data renstra
exports.tambahRenstra = function (req, res) {
  var id_renstra = req.body.id_renstra;
  var tahun_renstra = req.body.tahun_renstra;
  var renstra = req.body.renstra;
  var tgl_upload = req.body.tgl_upload;

  connection.query("INSERT INTO renstra (id_renstra, tahun_renstra, renstra, tgl_upload) VALUES (?, ?, ?, ?)", [id_renstra, tahun_renstra, renstra, tgl_upload], function (errorows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Kembalikan Data!", res);
    }
  });
};

// Merubah data berdasarkan id renstra
exports.ubahRenstra = function (req, res) {
  var id_renstra = req.body.id_renstra;
  var tahun_renstra = req.body.tahun_renstra;
  var renstra = req.body.renstra;
  var tgl_upload = req.body.tgl_upload;

  connection.query("UPDATE renstra SET tahun_renstra=?, renstra=?, tgl_upload=? WHERE id_renstra=?", [tahun_renstra, renstra, tgl_upload, id_renstra], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Ubah Data", res);
    }
  });
};

// Menghapus data berdasarkan id renstra
exports.hapusRenstra = function (req, res) {
  var id_renstra = req.body.id_renstra;
  connection.query("DELETE FROM renstra WHERE id_renstra=?", [id_renstra], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Hapus Data", res);
    }
  });
};
