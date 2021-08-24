"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data kelurahan
exports.tampilSemuaKelurahan = function (req, res) {
  connection.query("SELECT * FROM kelurahan", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data kelurahan berdasarkan id
exports.tampilKelurahanBerdasarkanID = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM kelurahan WHERE id_kelurahan = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data kelurahan
exports.tambahKelurahan = function (req, res) {
  var id_kelurahan = req.body.id_kelurahan;
  var nama_kelurahan = req.body.nama_kelurahan;

  connection.query("INSERT INTO kelurahan (id_kelurahan, nama_kelurahan) VALUES (?, ?)", [id_kelurahan, nama_kelurahan], function (errorows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Kembalikan Data!", res);
    }
  });
};

// Merubah data berdasarkan id kelurahan
exports.ubahKelurahan = function (req, res) {
  var id_kelurahan = req.body.id_kelurahan;
  var nama_kelurahan = req.body.nama_kelurahan;

  connection.query("UPDATE kelurahan SET nama_kelurahan=? WHERE id_kelurahan=?", [nama_kelurahan, id_kelurahan], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Ubah Data", res);
    }
  });
};

// Menghapus data berdasarkan id kelurahan
exports.hapusKelurahan = function (req, res) {
  var id_kelurahan = req.body.id_kelurahan;
  connection.query("DELETE FROM kelurahan WHERE id_kelurahan=?", [id_kelurahan], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Hapus Data", res);
    }
  });
};
