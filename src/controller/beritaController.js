"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data berita
exports.tampilSemuaBerita = function (req, res) {
  connection.query("SELECT * FROM berita", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data berita berdasarkan id
exports.tampilBeritaBerdasarkanID = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM berita WHERE id_berita = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data berita
exports.tambahBerita = function (req, res) {
  var id_berita = req.body.id_berita;
  var judul_berita = req.body.judul_berita;
  var tgl_berita = req.body.tgl_berita;
  var isi_berita = req.body.isi_berita;
  var cover_berita = req.body.cover_berita;

  connection.query("INSERT INTO berita (id_berita, judul_berita, tgl_berita, isi_berita, cover_berita) VALUES (?, ?, ?, ?, ?)", [id_berita, judul_berita, tgl_berita, isi_berita, cover_berita], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Kembalikan Data!", res);
    }
  });
};

// Merubah data berdasarkan id berita
exports.ubahBerita = function (req, res) {
  var id_berita = req.body.id_berita;
  var judul_berita = req.body.judul_berita;
  var tgl_berita = req.body.tgl_berita;
  var isi_berita = req.body.isi_berita;
  var cover_berita = req.body.cover_berita;

  connection.query("UPDATE berita SET judul_berita=?, tgl_berita=?, isi_berita=?, cover_berita=? WHERE id_berita=?", [judul_berita, tgl_berita, isi_berita, cover_berita, id_berita], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Ubah Data", res);
    }
  });
};

// Menghapus data berdasarkan id berita
exports.hapusBerita = function (req, res) {
  var id_berita = req.body.id_berita;
  connection.query("DELETE FROM berita WHERE id_berita=?", [id_berita], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Hapus Data", res);
    }
  });
};
