"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data Vidio
exports.tampilSemuaVideo = function (req, res) {
  connection.query("SELECT * FROM video", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data Vidio berdasarkan id
exports.tampilVideoBerdasarkanID = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM video WHERE id_video = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data Vidio
exports.tambahVideo = function (req, res) {
  var id_video = req.body.id_video;
  var nama_video = req.body.nama_video;
  var video = req.body.video;

  connection.query("INSERT INTO video (id_video, nama_video, video) VALUES (?, ?, ?)", [id_video, nama_video, video], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Kembalikan Data!", res);
    }
  });
};

// Merubah data berdasarkan id Vidio
exports.ubahVideo = function (req, res) {
  var id_video = req.body.id_video;
  var nama_video = req.body.nama_video;
  var video = req.body.video;

  connection.query("UPDATE video SET nama_video=?, video=?,  WHERE id_video=?", [nama_video, video, id_video], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Ubah Data", res);
    }
  });
};

// Menghapus data berdasarkan id Vidio
exports.hapusVideo = function (req, res) {
  var id_video = req.body.id_video;
  connection.query("DELETE FROM video WHERE id_video=?", [id_video], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Hapus Data", res);
    }
  });
};
