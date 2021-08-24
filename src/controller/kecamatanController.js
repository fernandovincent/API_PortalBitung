"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data kecamatan
exports.tampilSemuaKecamatan = function (req, res) {
  connection.query("SELECT * FROM kecamatan", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data kecamatan berdasarkan id
exports.tampilKecamatanBerdasarkanID = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM kecamatan WHERE id_kecamatan = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data kecamatan
exports.tambahKecamatan = function (req, res) {
  var id_kecamatan = req.body.id_kecamatan;
  var nama_kecamatan = req.body.nama_kecamatan;

  connection.query("INSERT INTO kecamatan (id_kecamatan, nama_kecamatan) VALUES (?, ?)", [id_kecamatan, nama_kecamatan], function (errorows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Kembalikan Data!", res);
    }
  });
};

// Merubah data berdasarkan id kecamatan
exports.ubahKecamatan = function (req, res) {
  var id_kecamatan = req.body.id_kecamatan;
  var nama_kecamatan = req.body.nama_kecamatan;

  connection.query("UPDATE kecamatan SET nama_kecamatan=? WHERE id_kecamatan=?", [nama_kecamatan, id_kecamatan], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Ubah Data", res);
    }
  });
};

// Menghapus data berdasarkan id kecamatan
exports.hapusKecamatan = function (req, res) {
  var id_kecamatan = req.body.id_kecamatan;
  connection.query("DELETE FROM kecamatan WHERE id_kecamatan=?", [id_kecamatan], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Hapus Data", res);
    }
  });
};
