"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data demografi
exports.tampilSemuaDemografi = function (req, res) {
  connection.query("SELECT * FROM demografi", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data demografi berdasarkan id
exports.tampilDemografiBerdasarkanID = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM demografi WHERE id_demografi = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data daftar demografi
exports.tambahDemografi = function (req, res) {
  var id_demografi = req.body.id_demografi;
  var demografi = req.body.demografi;
  var tgl_upload = req.body.tgl_upload;

  connection.query("INSERT INTO demografi (id_demografi, demografi, tgl_upload) VALUES (?, ?, ?)", [id_demografi, demografi, tgl_upload], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Kembalikan Data!", res);
    }
  });
};

// Merubah data berdasarkan id demografi
exports.ubahDemografi = function (req, res) {
  var id_demografi = req.body.id_demografi;
  var demografi = req.body.demografi;
  var tgl_upload = req.body.tgl_upload;

  connection.query("UPDATE demografi SET demografi=?, tgl_upload=? WHERE id_demografi=?", [demografi, tgl_upload, id_demografi], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Ubah Data", res);
    }
  });
};

// Menghapus data berdasarkan id demografi
exports.hapusDemografi = function (req, res) {
  var id_demografi = req.body.id_demografi;
  connection.query("DELETE FROM daftar_walikota WHERE id_demografi=?", [id_demografi], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Hapus Data", res);
    }
  });
};
