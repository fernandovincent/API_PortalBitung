"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function(req, res) {
    response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data Sejarah
exports.tampilSemuaSejarah = function(req, res) {
    connection.query("SELECT * FROM sejarah", function(error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// Menampilkan semua data Sejarah berdasarkan id
exports.tampilSejarahBerdasarkanID = function(req, res) {
    let id = req.params.id;
    connection.query("SELECT * FROM sejarah WHERE id_sejarah = ?", [id], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// Menambahkan data Sejarah
exports.tambahSejarah = function(req, res) {
    var id_sejarah = req.body.id_sejarah;
    var sejarah = req.body.sejarah;

    connection.query("INSERT INTO sejarah (id_sejarah, sejarah) VALUES (?, ?)", [id_sejarah, sejarah], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Kembalikan Data!", res);
        }
    });
};

// Merubah data berdasarkan id Sejarah
exports.ubahSejarah = function(req, res) {
    var id_sejarah = req.body.id_sejarah;
    var sejarah = req.body.sejarah;

    connection.query("UPDATE sejarah SET sejarah=? WHERE id_sejarah=?", [sejarah, id_sejarah], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Ubah Data", res);
        }
    });
};

// Menghapus data berdasarkan id Sejarah
exports.hapusSejarah = function(req, res) {
    var id_sejarah = req.body.id_sejarah;
    connection.query("DELETE FROM sejarah WHERE id_sejarah=?", [id_sejarah], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Hapus Data", res);
        }
    });
};