"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data event
exports.tampilSemuaEvent = function (req, res) {
  connection.query("SELECT * FROM event", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data event berdasarkan id
exports.tampilEventBerdasarkanID = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM event WHERE id_event = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data daftar event
exports.tambahEvent = function (req, res) {
  var id_event = req.body.id_event;
  var judul_event = req.body.judul_event;
  var isi_event = req.body.isi_event;
  var tgl_event = req.body.tgl_event;
  var cover_event = req.body.cover_event;

  connection.query("INSERT INTO event (id_event, judul_event, isi_event, tgl_event, cover_event) VALUES (?, ?, ?, ?, ?)", [id_event, judul_event, isi_event, tgl_event, cover_event], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Kembalikan Data!", res);
    }
  });
};

// Merubah data berdasarkan id event
exports.ubahEvent = function (req, res) {
  var id_event = req.body.id_event;
  var judul_event = req.body.judul_event;
  var isi_event = req.body.isi_event;
  var tgl_event = req.body.tgl_event;
  var cover_event = req.body.cover_event;

  connection.query("UPDATE event SET judul_event=?, isi_event=?, tgl_event=?, cover_event=? WHERE id_event=?", [judul_event, isi_event, tgl_event, cover_event, id_event], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Ubah Data", res);
    }
  });
};

// Menghapus data berdasarkan id event
exports.hapusEvent = function (req, res) {
  var id_event = req.body.id_event;
  connection.query("DELETE FROM daftar_walikota WHERE id_event=?", [id_event], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Hapus Data", res);
    }
  });
};
