"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data prestasi
exports.tampilSemuaPrestasi = function (req, res) {
  connection.query("SELECT * FROM prestasi", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data prestasi berdasarkan id
exports.tampilPrestasiBerdasarkanID = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM prestasi WHERE id_prestasi = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data prestasi
exports.tambahPrestasi = function (req, res) {
  var id_prestasi = req.body.id_prestasi;
  var nama_prestasi = req.body.nama_prestasi;
  var tahun_prestasi = req.body.tahun_prestasi;
  var tgl_prestasi = req.body.tgl_prestasi;
  var tempat = req.body.tempat;
  var tingkat = req.body.tingkat;
  var pemberi = req.body.pemberi;
  var penerima = req.body.penerima;
  var pemilik = req.body.pemilik;

  connection.query(
    "INSERT INTO prestasi (id_prestasi, nama_prestasi, tahun_prestasi, tgl_prestasi, tempat, tingkat, pemberi, penerima, pemilik) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [id_prestasi, nama_prestasi, tahun_prestasi, tgl_prestasi, tempat, tingkat, pemberi, penerima, pemilik],
    function (errorows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Kembalikan Data!", res);
      }
    }
  );
};

// Merubah data berdasarkan id prestasi
exports.ubahPrestasi = function (req, res) {
  var id_prestasi = req.body.id_prestasi;
  var nama_prestasi = req.body.nama_prestasi;
  var tahun_prestasi = req.body.tahun_prestasi;
  var tgl_prestasi = req.body.tgl_prestasi;
  var tempat = req.body.tempat;
  var tingkat = req.body.tingkat;
  var pemberi = req.body.pemberi;
  var penerima = req.body.penerima;
  var pemilik = req.body.pemilik;

  connection.query(
    "UPDATE prestasi SET nama_prestasi=?, tahun_prestasi=?, tgl_prestasi=?, tempat=?, tingkat=?, pemberi=?, penerima=?, pemilik=?  WHERE id_prestasi=?",
    [nama_prestasi, tahun_prestasi, tgl_prestasi, tempat, tingkat, pemberi, penerima, pemilik, id_prestasi],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Ubah Data", res);
      }
    }
  );
};

// Menghapus data berdasarkan id potensi
exports.hapusPrestasi = function (req, res) {
  var id_potensi = req.body.id_potensi;
  connection.query("DELETE FROM potensi WHERE id_potensi=?", [id_potensi], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Hapus Data", res);
    }
  });
};
