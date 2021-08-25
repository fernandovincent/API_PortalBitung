"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function(req, res) {
    response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data Struktur
exports.tampilSemuaStruktur = function(req, res) {
    connection.query("SELECT * FROM struktur", function(error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// Menampilkan semua data Struktur berdasarkan id
exports.tampilStrukturBerdasarkanID = function(req, res) {
    let id = req.params.id;
    connection.query("SELECT * FROM struktur WHERE id_struktur = ?", [id], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// Menambahkan data Struktur
exports.tambahStruktur = function(req, res) {
    var id_struktur = req.body.id_struktur;
    var struktur = req.body.struktur;
    var tgl_upload = req.body.tgl_upload;

    connection.query("INSERT INTO struktur (id_struktur, struktur, tgl_upload) VALUES (?, ?, ?)", [id_struktur, struktur, tgl_upload], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Kembalikan Data!", res);
        }
    });
};

// Merubah data berdasarkan id Struktur
exports.ubahStruktur = function(req, res) {
    var id_struktur = req.body.id_struktur;
    var struktur = req.body.struktur;
    var tgl_upload = req.body.tgl_upload;

    connection.query("UPDATE struktur SET struktur=?, tgl_upload=?,  WHERE id_struktur=?", [struktur, tgl_upload, id_struktur], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Ubah Data", res);
        }
    });
};

// Menghapus data berdasarkan id Struktur
exports.hapusStruktur = function(req, res) {
    var id_struktur = req.body.id_struktur;
    connection.query("DELETE FROM struktur WHERE id_struktur=?", [id_struktur], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Hapus Data", res);
        }
    });
};