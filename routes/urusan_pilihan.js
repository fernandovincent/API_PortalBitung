"use strict";

module.exports = function(app) {
    var jsonku = require("../src/controller/urusan_pilihanController");

    app.route("/").get(jsonku.index);

    app.route("/tampilUrusan_pilihan").get(jsonku.tampilSemuaUrusan_pilihan);

    app.route("/tampilUrusan_pilihan/:id").get(jsonku.tampilUrusan_pilihanBerdasarkanID);

    app.route("/tambahUrusan_pilihan").post(jsonku.tambahUrusan_pilihan);

    app.route("/ubahUrusan_pilihan").put(jsonku.ubahUrusan_pilihan);

    app.route("/hapusUrusan_pilihan").delete(jsonku.hapusUrusan_pilihan);
};