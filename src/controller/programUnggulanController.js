"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data program unggulan
exports.tampilSemuaProgramUnggulan = function (req, res) {
  connection.query("SELECT * FROM program_unggulan", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data program unggulan berdasarkan id
exports.tampilProgramUnggulanBerdasarkanID = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM program_unggulan WHERE id_program_unggulan = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data program unggulan
exports.tambahProgramUnggulan = function (req, res) {
  var id_program_unggulan = req.body.id_program_unggulan;
  var nama_program_unggulan = req.body.nama_program_unggulan;
  var isi_program_unggulan = req.body.isi_program_unggulan;
  var cover_program_unggulan = req.body.cover_program_unggulan;

  connection.query("INSERT INTO program_unggulan (id_program_unggulan, nama_program_unggulan, isi_program_unggulan, cover_program_unggulan) VALUES (?, ?, ?, ?)", [id_program_unggulan, nama_program_unggulan, isi_program_unggulan, cover_program_unggulan], function (errorows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Kembalikan Data!", res);
    }
  });
};

// Merubah data berdasarkan id program unggulan
exports.ubahProgramUnggulan = function (req, res) {
  var id_program_unggulan = req.body.id_program_unggulan;
  var nama_program_unggulan = req.body.nama_program_unggulan;
  var isi_program_unggulan = req.body.isi_program_unggulan;
  var cover_program_unggulan = req.body.cover_program_unggulan;

  connection.query("UPDATE program_unggulan SET nama_program_unggulan=?, isi_program_unggulan=?, cover_program_unggulan=? WHERE id_program_unggulan=?", [nama_program_unggulan, isi_program_unggulan, cover_program_unggulan, id_program_unggulan], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Ubah Data", res);
    }
  });
};

// Menghapus data berdasarkan id program unggulan
exports.hapusProgramUnggulan = function (req, res) {
  var id_program_unggulan = req.body.id_program_unggulan;
  connection.query("DELETE FROM program_unggulan WHERE id_program_unggulan=?", [id_program_unggulan], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Hapus Data", res);
    }
  });
};
