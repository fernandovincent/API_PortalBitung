"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function(req, res) {
    response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data Visimisi
exports.tampilSemuaVisimisi = function(req, res) {
    connection.query("SELECT * FROM visimisi", function(error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// Menampilkan semua data Visimisi berdasarkan id
exports.tampilVisimisiBerdasarkanID = function(req, res) {
    let id = req.params.id;
    connection.query("SELECT * FROM Visimisi WHERE id_Visimisi = ?", [id], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// Menambahkan data Visimisi
exports.tambahVisimisi = function(req, res) {
    var id_visimisi = req.body.id_visimisi;
    var visi = req.body.visi;
    var misi = req.body.misi;

    connection.query("INSERT INTO visimisi (id_visimisi, visimisi, visimisi) VALUES (?, ?, ?)", [id_visimisi, visi, misi], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Kembalikan Data!", res);
        }
    });
};

// Merubah data berdasarkan id Visimisi
exports.ubahVisimisi = function(req, res) {
    var id_visimisi = req.body.id_visimisi;
    var visi = req.body.visi;
    var misi = req.body.misi;

    connection.query("UPDATE visimisi SET visi=?, misi=?,  WHERE id_visimisi=?", [visi, misi, id_visimisi], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Ubah Data", res);
        }
    });
};

// Menghapus data berdasarkan id Visimisi
exports.hapusVisimisi = function(req, res) {
    var id_visimisi = req.body.id_visimisi;
    connection.query("DELETE FROM visimisi WHERE id_visimisi=?", [id_visimisi], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Hapus Data", res);
        }
    });
};