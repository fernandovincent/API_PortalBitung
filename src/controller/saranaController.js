"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function(req, res) {
    response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data sarana
exports.tampilSemuaSarana = function(req, res) {
    connection.query("SELECT * FROM sarana", function(error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// Menampilkan semua data sarana berdasarkan id
exports.tampilSaranaBerdasarkanID = function(req, res) {
    let id = req.params.id;
    connection.query("SELECT * FROM sarana WHERE id_sarana = ?", [id], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// Menambahkan data sarana
exports.tambahSarana = function(req, res) {
    var id_sarana = req.body.id_sarana;
    var nama_sarana = req.body.nama_sarana;
    var alamat_sarana = req.body.alamat_sarana;
    var no_telp_sarana = req.body.no_telp_sarana;
    var kode_pos = req.body.kode_pos;
    var email = req.body.email;
    var website = req.body.website;
    var id_kategori_sarana = req.body.id_kategori_sarana;

    connection.query("INSERT INTO sarana (id_sarana, nama_sarana, alamat_sarana, no_telp_sarana, kode_pos, email, website, id_kategori_sarana) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [id_sarana, nama_sarana, alamat_sarana, no_telp_sarana, kode_pos, email, website, id_kategori_sarana], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Kembalikan Data!", res);
        }
    });
};

// Merubah data berdasarkan id sarana
exports.ubahSarana = function(req, res) {
    var id_sarana = req.body.id_sarana;
    var nama_sarana = req.body.nama_sarana;
    var alamat_sarana = req.body.alamat_sarana;
    var no_telp_sarana = req.body.no_telp_sarana;
    var kode_pos = req.body.kode_pos;
    var email = req.body.email;
    var website = req.body.website;
    var id_kategori_sarana = req.body.id_kategori_sarana;

    connection.query("UPDATE sarana SET nama_sarana=?, alamat_sarana=?, no_telp_sarana=?, kode_pos=?, email=?, website=?, id_kategori_sarana=?, WHERE id_sarana=?", [nama_sarana, alamat_sarana, no_telp_sarana, kode_pos, email, website, id_kategori_sarana, id_sarana], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Ubah Data", res);
        }
    });
};

// Menghapus data berdasarkan id sarana
exports.hapusSarana = function(req, res) {
    var id_sarana = req.body.id_sarana;
    connection.query("DELETE FROM sarana WHERE id_sarana=?", [id_sarana], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Hapus Data", res);
        }
    });
};