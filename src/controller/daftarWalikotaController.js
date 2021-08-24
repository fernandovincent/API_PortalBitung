"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data daftar walikota
exports.tampilSemuaDaftar = function (req, res) {
  connection.query("SELECT * FROM daftar_walikota", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data daftar walikota berdasarkan id
exports.tampilDaftarBerdasarkanID = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM daftar_walikota WHERE id_daftar_walikota = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data daftar walikota
exports.tambahDaftar = function (req, res) {
  var id_daftar_walikota = req.body.id_daftar_walikota;
  var nama_walikota = req.body.nama_walikota;
  var tahun = req.body.tahun;
  var foto_walikota = req.body.foto_walikota;
  var nama_wakil_walikota = req.body.nama_wakil_walikota;
  var foto_wakil_walikota = req.body.foto_wakil_walikota;

  connection.query(
    "INSERT INTO daftar_walikota (id_daftar_walikota, nama_walikota, tahun, foto_walikota, nama_wakil_walikota, foto_wakil_walikota) VALUES (?, ?, ?, ?, ?, ?)",
    [id_daftar_walikota, nama_walikota, tahun, foto_walikota, nama_wakil_walikota, foto_wakil_walikota],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Kembalikan Data!", res);
      }
    }
  );
};

// Merubah data berdasarkan id daftar walikota
exports.ubahDaftar = function (req, res) {
  var id_daftar_walikota = req.body.id_daftar_walikota;
  var nama_walikota = req.body.nama_walikota;
  var tahun = req.body.tahun;
  var foto_walikota = req.body.foto_walikota;
  var nama_wakil_walikota = req.body.nama_wakil_walikota;
  var foto_wakil_walikota = req.body.foto_wakil_walikota;

  connection.query(
    "UPDATE daftar_walikota SET nama_walikota=?, tahun=?, foto_walikota=?, nama_wakil_walikota=?, foto_wakil_walikota=? WHERE id_daftar_walikota=?",
    [nama_walikota, tahun, foto_walikota, nama_wakil_walikota, foto_wakil_walikota, id_daftar_walikota],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Ubah Data", res);
      }
    }
  );
};

// Menghapus data berdasarkan id daftar walikota
exports.hapusDaftar = function (req, res) {
  var id_daftar_walikota = req.body.id_daftar_walikota;
  connection.query("DELETE FROM daftar_walikota WHERE id_daftar_walikota=?", [id_daftar_walikota], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Hapus Data", res);
    }
  });
};
