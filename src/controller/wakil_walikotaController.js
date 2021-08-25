"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function(req, res) {
    response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data Wakil_walikota
exports.tampilSemuaWakil_walikota = function(req, res) {
    connection.query("SELECT * FROM wakil_walikota", function(error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// Menampilkan semua data Wakil_walikota berdasarkan id
exports.tampilWakil_walikotaBerdasarkanID = function(req, res) {
    let id = req.params.id;
    connection.query("SELECT * FROM Wakil_walikota WHERE id_Wakil_walikota = ?", [id], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// Menambahkan data Wakil_walikota
exports.tambahWakil_walikota = function(req, res) {
    var id_wakil_walikota = req.body.id_wakil_walikota;
    var nama_wakil_walikota = req.body.nama_wakil_walikota;
    var tempat_lahir = req.body.tempat_lahir;
    var tgl_lahir = req.body.tgl_lahir;
    var alamat_rumah = req.body.alamat_rumah;
    var alamat_kantor = req.body.alamat_kantor;
    var nama_istri = req.body.nama_istri;
    var foto_wakil_walikota = req.body.foto_wakil_walikota;

    connection.query("INSERT INTO wakil_walikota (id_wakil_walikota, nama_wakil_walikota, tempat_lahir, tgl_lahir, alamat_rumah, alamat_kantor, nama_istri, foto_wakil_walikota) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [id_wakil_walikota, nama_wakil_walikota, tempat_lahir, tgl_lahir, alamat_rumah, alamat_kantor, nama_istri, foto_wakil_walikota], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Kembalikan Data!", res);
        }
    });
};

// Merubah data berdasarkan id Wakil_walikota
exports.ubahWakil_walikota = function(req, res) {
    var id_wakil_walikota = req.body.id_wakil_walikota;
    var nama_wakil_walikota = req.body.nama_wakil_walikota;
    var tempat_lahir = req.body.tempat_lahir;
    var tgl_lahir = req.body.tgl_lahir;
    var alamat_rumah = req.body.alamat_rumah;
    var alamat_kantor = req.body.alamat_kantor;
    var nama_istri = req.body.nama_istri;
    var foto_wakil_walikota = req.body.foto_wakil_walikota;

    connection.query("UPDATE wakil_walikota SET nama_wakil_walikota=?, tempat_lahir=?, tgl_lahir=?, alamat_rumah=?, alamat_kantor=?, nama_istri=?, foto_wakil_walikota=?,  WHERE id_wakil_walikota=?", [nama_wakil_walikota, tempat_lahir, tgl_lahir, alamat_rumah, alamat_kantor, nama_istri, foto_wakil_walikota, id_wakil_walikota], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Ubah Data", res);
        }
    });
};

// Menghapus data berdasarkan id Wakil_walikota
exports.hapusWakil_walikota = function(req, res) {
    var id_wakil_walikota = req.body.id_wakil_walikota;
    connection.query("DELETE FROM wakil_walikota WHERE id_wakil_walikota=?", [id_wakil_walikota], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Hapus Data", res);
        }
    });
};