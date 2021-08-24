"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data produk hukum
exports.tampilSemuaProdukHukum = function (req, res) {
  connection.query("SELECT * FROM produk_hukum", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data produk Hukum berdasarkan id
exports.tampilProdukHukumBerdasarkanID = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM produk_hukum WHERE id_produk_hukum = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data produk hukum
exports.tambahProdukHukum = function (req, res) {
  var id_produk_hukum = req.body.id_produk_hukum;
  var jenis_produk_hukum = req.body.jenis_produk_hukum;
  var tahun_produk_hukum = req.body.tahun_produk_hukum;
  var nomor_produk_hukum = req.body.nomor_produk_hukum;
  var nama_produk_hukum = req.body.nama_produk_hukum;
  var file_produk_hukum = req.body.file_produk_hukum;

  connection.query("INSERT INTO produk_hukum (id_produk_hukum, jenis_produk_hukum, tahun_produk_hukum, nomor_produk_hukum, nama_produk_hukum, file_produk_hukum) VALUES (?, ?, ?, ?, ?, ?)", [id_produk_hukum, jenis_produk_hukum, tahun_produk_hukum, nomor_produk_hukum, nama_produk_hukum, file_produk_hukum], function (errorows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Kembalikan Data!", res);
    }
  });
};

// Merubah data berdasarkan id produk hukum
exports.ubahProdukHukum = function (req, res) {
    var id_produk_hukum = req.body.id_produk_hukum;
    var jenis_produk_hukum = req.body.jenis_produk_hukum;
    var tahun_produk_hukum = req.body.tahun_produk_hukum;
    var nomor_produk_hukum = req.body.nomor_produk_hukum;
    var nama_produk_hukum = req.body.nama_produk_hukum;
    var file_produk_hukum = req.body.file_produk_hukum;

  connection.query("UPDATE produk_hukum SET jenis_produk_hukum=?, tahun_produk_hukum=?, nomor_produk_hukum=?, nama_produk_hukum=?, file_produk_hukum=? WHERE id_produk_hukum=?", [jenis_produk_hukum, tahun_produk_hukum, nomor_produk_hukum, nama_produk_hukum, file_produk_hukum, id_produk_hukum], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Ubah Data", res);
    }
  });
};

// Menghapus data berdasarkan id produk hukum
exports.hapusProdukHukum = function (req, res) {
  var id_produk_hukum = req.body.id_produk_hukum;
  connection.query("DELETE FROM produk_hukum WHERE id_produk_hukum=?", [id_produk_hukum], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Hapus Data", res);
    }
  });
};
