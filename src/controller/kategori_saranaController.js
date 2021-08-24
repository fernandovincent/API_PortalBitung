"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data kategori_sarana
exports.tampilSemuaKategori_Sarana = function (req, res) {
  connection.query("SELECT * FROM kategori_sarana", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data kategori_sarana berdasarkan id
exports.tampilKategori_SaranaBerdasarkanID = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM kategori_sarana WHERE id_kategori_sarana = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data kategori_sarana
exports.tambahKategori_Sarana = function (req, res) {
    var id_kategori_sarana = req.body.id_kategori_sarana;
    var nama_kategori_sarana = req.body.nama_kategori_sarana;

  connection.query("INSERT INTO kategori_sarana (id_kategori_sarana, nama_kategori_sarana) VALUES (?, ?)", [id_kategori_sarana, nama_kategori_sarana], function (errorows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Kembalikan Data!", res);
    }
  });
};

// Merubah data berdasarkan id kategori_sarana
exports.ubahKategori_Sarana = function (req, res) {
  var id_kategori_sarana = req.body.id_kategori_sarana;
  var nama_kategori_sarana = req.body.nama_kategori_sarana;
 
  connection.query("UPDATE kategori_sarana SET nama_kategori_sarana=? WHERE id_kategori_sarana=?", [nama_kategori_sarana, id_kategori_sarana], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Ubah Data", res);
    }
  });
};

// Menghapus data berdasarkan id kategori_sarana
exports.hapusKategori_Sarana = function (req, res) {
  var id_kategori_sarana = req.body.id_kategori_sarana;
  connection.query("DELETE FROM kategori_sarana WHERE id_kategori_sarana=?", [id_kategori_sarana], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Hapus Data", res);
    }
  });
};
