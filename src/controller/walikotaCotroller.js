"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function(req, res) {
    response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data Walikota
exports.tampilSemuaWalikota = function(req, res) {
    connection.query("SELECT * FROM walikota", function(error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// Menampilkan semua data Walikota berdasarkan id
exports.tampilWalikotaBerdasarkanID = function(req, res) {
    let id = req.params.id;
    connection.query("SELECT * FROM walikota WHERE id_walikota = ?", [id], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// Menambahkan data Walikota
exports.tambahWalikota = function(req, res) {
    var id_walikota = req.body.id_walikota;
    var nama_walikota = req.body.nama_walikota;
    var tempat_lahir = req.body.tempat_lahir;
    var tgl_lahir = req.body.tgl_lahir;
    var alamat_kantor = req.body.alamat_kantor;
    var alamat_rumah = req.body.alamat_rumah;
    var nama_istri = req.body.nama_istri;
    var foto_walikota = req.body.foto_walikota;

    connection.query("INSERT INTO walikota (id_walikota, nama_walikota, tempat_lahir, tgl_lahir, alamat_kantor, alamat_rumah, nama_istri, foto_walikota) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [id_walikota, nama_walikota, tempat_lahir, tgl_lahir, alamat_, alamat_rumah, nama_istri, foto_walikota], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Kembalikan Data!", res);
        }
    });
};

// Merubah data berdasarkan id Walikota
exports.ubahWalikota = function(req, res) {
    var id_walikota = req.body.id_walikota;
    var nama_walikota = req.body.nama_walikota;
    var tempat_lahir = req.body.tempat_lahir;
    var tgl_lahir = req.body.tgl_lahir;
    var alamat_kantor = req.body.alamat_kantor;
    var alamat_rumah = req.body.alamat_rumah;
    var nama_istri = req.body.nama_istri;
    var foto_walikota = req.body.foto_walikota;

    connection.query("UPDATE walikota SET nama_walikota=?, tempat_lahir=?, tgl_lahir=?, alamat_rumah=?, alamat_kantor=?, nama_istri=?, foto_walikota=?,  WHERE id_walikota=?", [nama_walikota, tempat_lahir, tgl_lahir, alamat_kantor, alamat_rumah, nama_istri, foto_walikota, id_walikota], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Ubah Data", res);
        }
    });
};

// Menghapus data berdasarkan id Walikota
exports.hapusWalikota = function(req, res) {
    var id_walikota = req.body.id_walikota;
    connection.query("DELETE FROM walikota WHERE id_walikota=?", [id_walikota], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Hapus Data", res);
        }
    });
};