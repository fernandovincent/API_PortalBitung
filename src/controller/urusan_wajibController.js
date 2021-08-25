"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function(req, res) {
    response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data Urusan_wajib
exports.tampilSemuaUrusan_wajib = function(req, res) {
    connection.query("SELECT * FROM urusan_wajib", function(error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// Menampilkan semua data Urusan_wajib berdasarkan id
exports.tampilUrusan_wajibBerdasarkanID = function(req, res) {
    let id = req.params.id;
    connection.query("SELECT * FROM urusan_wajib WHERE id_urusan_wajib = ?", [id], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// Menambahkan data Urusan_wajib
exports.tambahUrusan_wajib = function(req, res) {
    var id_urusan_wajib = req.body.id_urusan_wajib;
    var nama_urusan_wajib = req.body.nama_urusan_wajib;
    var file_urusan_wajib = req.body.file_urusan_wajib;
    var tgl_upload = req.body.tgl_upload;

    connection.query("INSERT INTO urusan_wajib (id_urusan_wajib, nama_urusan_wajib, file_urusan_wajib, tgl_upload) VALUES (?, ?, ?, ?)", [id_urusan_wajib, nama_urusan_wajib, file_urusan_wajib, tgl_upload], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Kembalikan Data!", res);
        }
    });
};

// Merubah data berdasarkan id Urusan_wajib
exports.ubahUrusan_wajib = function(req, res) {
    var id_urusan_wajib = req.body.id_urusan_wajib;
    var nama_urusan_wajib = req.body.nama_urusan_wajib;
    var file_urusan_wajib = req.body.file_urusan_wajib;
    var tgl_upload = req.body.tgl_upload;

    connection.query("UPDATE urusan_wajib SET nama_urusan_wajib=?, file_urusan_wajib=?, tgl_upload=?,  WHERE id_urusan_wajib=?", [nama_urusan_wajib, file_urusan_wajib, tgl_upload, id_urusan_wajib], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Ubah Data", res);
        }
    });
};

// Menghapus data berdasarkan id Urusan_wajib
exports.hapusUrusan_wajib = function(req, res) {
    var id_urusan_wajib = req.body.id_urusan_wajib;
    connection.query("DELETE FROM urusan_wajib WHERE id_urusan_wajib=?", [id_urusan_wajib], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Hapus Data", res);
        }
    });
};