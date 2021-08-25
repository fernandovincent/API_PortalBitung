"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function(req, res) {
    response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data Urusan_pilihan
exports.tampilSemuaUrusan_pilihan = function(req, res) {
    connection.query("SELECT * FROM urusan_pilihan", function(error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// Menampilkan semua data urusan_pilihan berdasarkan id
exports.tampilUrusan_pilihanBerdasarkanID = function(req, res) {
    let id = req.params.id;
    connection.query("SELECT * FROM urusan_pilihan WHERE id_urusan_pilihan = ?", [id], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// Menambahkan data Urusan_pilihan
exports.tambahUrusan_pilihan = function(req, res) {
    var id_urusan_pilihan = req.body.id_urusan_pilihan;
    var nama_urusan_pilihan = req.body.nama_urusan_pilihan;
    var file_urusan_pilihan = req.body.file_urusan_pilihan;
    var tgl_upload = req.body.tgl_upload;

    connection.query("INSERT INTO urusan_pilihan (id_urusan_pilihan, nama_urusan_pilihan, file_urusan_pilihan, tgl_upload) VALUES (?, ?, ?, ?)", [id_urusan_pilihan, nama_urusan_pilihan, file_urusan_pilihan, tgl_upload], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Kembalikan Data!", res);
        }
    });
};

// Merubah data berdasarkan id Urusan_pilihan
exports.ubahUrusan_pilihan = function(req, res) {
    var id_urusan_pilihan = req.body.id_urusan_pilihan;
    var nama_urusan_pilihan = req.body.nama_urusan_pilihan;
    var file_urusan_pilihan = req.body.file_urusan_pilihan;
    var tgl_upload = req.body.tgl_upload;

    connection.query("UPDATE urusan_pilihan SET nama_urusan_pilihan=?, file_urusan_pilihan=?, tgl_upload=?,  WHERE id_urusan_pilihan=?", [nama_urusan_pilihan, file_urusan_pilihan, tgl_upload, id_urusan_pilihan], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Ubah Data", res);
        }
    });
};

// Menghapus data berdasarkan id Urusan_pilihan
exports.hapusUrusan_pilihan = function(req, res) {
    var id_urusan_pilihan = req.body.id_urusan_pilihan;
    connection.query("DELETE FROM urusan_pilihan WHERE id_urusan_pilihan=?", [id_urusan_pilihan], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Hapus Data", res);
        }
    });
};