"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data pegawai
exports.tampilSemuaPegawai = function (req, res) {
  connection.query("SELECT * FROM pegawai", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data pegawai berdasarkan id
exports.tampilPegawaiBerdasarkanID = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM pegawai WHERE id_pegawai = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data pegawai
exports.tambahPegawai = function (req, res) {
  var id_pegawai = req.body.id_pegawai;
  var nama_pegawai = req.body.nama_pegawai;
  var jabatan = req.body.jabatan;
  var skpd = req.body.skpd;
  var golongan = req.body.golongan;
  var pangkat = req.body.pangkat;

  connection.query("INSERT INTO pegawai (id_pegawai, nama_pegawai, jabatan, skpd, golongan, pangkat) VALUES (?, ?, ?, ?, ?)", [id_pegawai, nama_pegawai, jabatan, skpd, golongan, pangkat], function (errorows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Kembalikan Data!", res);
    }
  });
};

// Merubah data berdasarkan id pegawai
exports.ubahPegawai = function (req, res) {
  var id_pegawai = req.body.id_pegawai;
  var nama_pegawai = req.body.nama_pegawai;
  var jabatan = req.body.jabatan;
  var skpd = req.body.skpd;
  var golongan = req.body.golongan;
  var pangkat = req.body.pangkat;

  connection.query("UPDATE pegawai SET nama_pegawai=?, jabatan=?, skpd=?, golongan=?, pangkat=?  WHERE id_pegawai=?", [nama_pegawai, jabatan, skpd, golongan, pangkat, id_pegawai], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Ubah Data", res);
    }
  });
};

// Menghapus data berdasarkan id pegawai
exports.hapusPegawai = function (req, res) {
  var id_pegawai = req.body.id_pegawai;
  connection.query("DELETE FROM pegawai WHERE id_pegawai=?", [id_pegawai], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Hapus Data", res);
    }
  });
};
