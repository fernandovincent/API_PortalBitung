"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function(req, res) {
    response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data Skpd
exports.tampilSemuaSkpd = function(req, res) {
    connection.query("SELECT * FROM skpd", function(error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// Menampilkan semua data Skpd berdasarkan id
exports.tampilSkpdBerdasarkanID = function(req, res) {
    let id = req.params.id;
    connection.query("SELECT * FROM skpd WHERE id_skpd = ?", [id], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// Menambahkan data Skpd
exports.tambahSkpd = function(req, res) {
    var id_skpd = req.body.id_skpd;
    var nama_skpd = req.body.nama_skpd;
    var link_skpd = req.body.link_skpd;

    connection.query("INSERT INTO skpd (id_skpd, nama_skpd, link_skpd) VALUES (?, ?, ?)", [id_skpd, nama_skpd, link_skpd], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Kembalikan Data!", res);
        }
    });
};

// Merubah data berdasarkan id Skpd
exports.ubahSkpd = function(req, res) {
    var id_skpd = req.body.id_skpd;
    var nama_skpd = req.body.nama_skpd;
    var link_skpd = req.body.link_skpd;

    connection.query("UPDATE skpd SET nama_skpd=?, link_skpd=?, WHERE id_skpd=?", [nama_skpd, link_skpd, id_skpd], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Ubah Data", res);
        }
    });
};

// Menghapus data berdasarkan id Skpd
exports.hapusSkpd = function(req, res) {
    var id_skpd = req.body.id_skpd;
    connection.query("DELETE FROM skpd WHERE id_skpd=?", [id_skpd], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Hapus Data", res);
        }
    });
};