"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data iklan
exports.tampilSemuaIklan = function (req, res) {
  connection.query("SELECT * FROM iklan", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data kecil berdasarkan id
exports.tampilIklanBerdasarkanID = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM iklan WHERE id_iklan = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data iklan
exports.tambahIklan = function (req, res) {
  var id_iklan = req.body.id_iklan;
  var iklan = req.body.iklan;

  connection.query("INSERT INTO iklan (id_iklan, iklan) VALUES (?, ?)", [id_iklan, iklan], function (errorows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Kembalikan Data!", res);
    }
  });
};

// Merubah data berdasarkan id kecil
exports.ubahIklan = function (req, res) {
  var id_iklan = req.body.id_iklan;
  var iklan = req.body.iklan;

  connection.query("UPDATE iklan SET iklan=? WHERE id_iklan=?", [iklan, id_iklan], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Ubah Data", res);
    }
  });
};

// Menghapus data berdasarkan id iklan
exports.hapusIklan = function (req, res) {
  var id_iklan = req.body.id_iklan;
  connection.query("DELETE FROM iklan WHERE id_iklan=?", [id_iklan], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Hapus Data", res);
    }
  });
};
